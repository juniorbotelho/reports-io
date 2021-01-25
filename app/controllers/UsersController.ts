import bcrypt from "bcrypt"
import { getRepository } from "typeorm"
import { User } from "@App:Models/User"
import { Nodemailer } from "@Providers/Nodemailer"
import { Encrypter } from "@Providers/Encrypter"

export class UsersController {
  public static async index({ query }: User.Request, response: User.Response) {
    if (query.token) {
      // TODO: Make it if query token is provided
      return response.send("/accounts/finish")
    }

    if (query.validation) {
      // TODO: Make it if query validtion is provided
      return response.send("/accounts/finish")
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
        from: '"reports.io" <account@reports.io>', // sender address
        to: body.email, // list of receivers
        subject: "Confirm your email!", // Subject line
        text:
          "In order for your account to be validated in our database, you must activate it by clicking the link below: D", // plain text body
        html: `<a href="${confirmReference}">${confirmReference}</a>` // html body
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
