import { User } from "@App:Models/User"
import { Request, Response } from "express"
import { getRepository } from "typeorm"

export class AuthController {
  public static async index({ body }: Request, response: Response) {
    try {
      const repo = getRepository(User)

      const user = await repo.findOneOrFail({
        where: { email: body.auth.email }
      })

      if (user) {
        if (user.firsthere) {
          repo.save({ ...user, firsthere: false })

          response.status(200).json({
            pathname: "/user/introduction",
            query: {}
          })
        }

        if (!user.firsthere) {
          response.status(200).json({
            pathname: "/user/dashboard",
            query: {}
          })
        }
      }
    } catch (error) {
      // TODO: Sentry Error
      console.error(error)
    }
  }
}
