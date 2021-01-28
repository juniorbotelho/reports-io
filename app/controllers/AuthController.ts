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
        // This condition is called when the user accesses the platform for the first time
        if (user.firsthere) {
          repo.save({ ...user, firsthere: false })

          response.status(200).json({
            pathname: "/user/introduction",
            query: {}
          })
        }

        // This other condition is called most of the time, after the user
        // has already accessed the platform
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
