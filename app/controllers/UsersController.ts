import bcrypt from "bcrypt"
import { getRepository } from "typeorm"
import { User } from "@App:Models/User"
import { Nodemailer } from "@Providers/Nodemailer"
import { Encrypter } from "@Providers/Encrypter"

export class UsersController {
  public static async index(request: User.Request, response: User.Response) {
    const { body, query } = request
    const { email, username, password } = body

    if (query.validation) {
      // TODO: Make it if query validtion is provided
      return response.status(200).redirect("/accounts/finish")
    }

    // Standart flow
    try {
      const repo = getRepository(User)
      let user: User = null

      // Verify
      if (username) user = await repo.findOneOrFail({ where: { username } })
      if (email) user = await repo.findOneOrFail({ where: { email } })

      // Compare
      const hashComparePassword = await bcrypt.compare(password, user.password)

      if (hashComparePassword) {
        return response.status(200).json({
          ...user,
          authenticated: true,
          message: "Successfully authenticated.",
          password: null
        })
      } else {
        return response.status(401).json({
          authenticated: false,
          message: "There was an error to connect, the password is incorrect.",
          ...request.body
        })
      }
    } catch (error) {
      // Sentry Error
      console.error(error)
    }
  }

  public static async store({ body }: User.Request, response: User.Response) {
    const hashFromPassword = await bcrypt.hash(body.password, 10)

    try {
      const repo = getRepository(User)

      // Save
      const { id: identityUser, email, username } = await repo.save({
        email: body.email,
        username: body.username,
        password: hashFromPassword
      })

      // TODO: Handle base64 user id
      const base64 = Buffer.from(
        JSON.stringify({
          email: body.email,
          username: body.username
        })
      ).toString("base64")

      // Encrypter
      const encrypterHash = new Encrypter(process.env.EMAIL_VALIDATION_HASH)
      const encrypted = encrypterHash.getEncryptedHash({
        identityUser,
        email,
        username,
        validated: true
      })

      // Send mail to validation
      const { transporter } = new Nodemailer()
      const confirmReference = `http://localhost:3000/users/email?validation=${encrypted}`

      await transporter.sendMail({
        from: '"reports.io" <account@reports.io>',
        to: body.email,
        subject: "Confirm your email!",
        text: "Validate your account!",
        html: `
          <p>
            In order for your account to be validated in our database,
            you must activate it by clicking the link below: D
          </p>
          <a href="${confirmReference}">
            Click here to activate
          </a>`
      })

      response.status(200).send({
        pathname: "/accounts/validation",
        query: { info: base64 }
      })
    } catch (error) {
      // TODO: Sentry error
      console.error(error)
    }
  }
}
