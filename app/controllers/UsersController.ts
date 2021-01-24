import { User } from "@App:Models/User"
import { getRepository } from "typeorm"

export class UsersController {
  public static async store({ body }: User.Request, response: User.Response) {
    const base64 = Buffer.from(
      JSON.stringify({
        email: body.email,
        username: body.username
      })
    ).toString("base64")

    try {
      const repo = getRepository(User)

      await repo.save({
        email: body.email,
        username: body.username,
        password: body.password
      })

      response.status(200).send({
        pathname: "/accounts/validation",
        query: { info: base64 }
      })
    } catch (error) {
      console.error(error)
    }
  }
}
