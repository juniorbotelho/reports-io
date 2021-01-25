import { User } from "@App:Models/User"
import express, { Response, NextFunction } from "express"
import { getRepository } from "typeorm"

export const UserEmailValidation = express().use(
  async ({ body }: User.Request, response: Response, next: NextFunction) => {
    try {
      const repo = getRepository(User)
      const user = await repo.findOneOrFail({
        where: { id: body.id }
      })

      // Save by repo
      await repo.save({
        ...user,
        validated: JSON.parse(String(body.validated).toLowerCase())
      })
    } catch (error) {
      // TODO: Sentry error
      console.error(error)
    }

    // Next
    next()
  }
)
