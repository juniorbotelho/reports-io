import { Request, Response } from "express"

import { User } from "@App:Models/UserModel"
import { getRepository } from "@Providers/Firebase"

export class UsersController {
  public static async store({ body }: Request, response: Response) {
    const base64 = Buffer.from(
      JSON.stringify({
        email: body.email,
        username: body.username
      })
    ).toString("base64")

    try {
      const repo = getRepository(User)

      await repo.signup({
        email: body.email,
        password: body.password
      })

      response.status(200).send({
        pathname: "/accounts/validation",
        query: { info: base64 }
      })
    } catch (error) {}
  }
}
