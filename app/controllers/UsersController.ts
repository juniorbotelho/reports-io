import { Request, Response } from "express"

export class UsersController {
  public static async store({ body }: Request, response: Response) {
    const base64 = Buffer.from(
      JSON.stringify({
        email: body.email,
        username: body.username
      })
    ).toString("base64")

    try {
      response.status(200).send({
        pathname: "/accounts/validation",
        query: { info: base64 }
      })
    } catch (error) {}
  }
}
