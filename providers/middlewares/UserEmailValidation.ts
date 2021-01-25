import express, { Response, NextFunction } from "express"
import { User } from "@App:Models/User"
import { Encrypter } from "@Providers/Encrypter"
import { getRepository } from "typeorm"

export const UserEmailValidation = express().use(
  async ({ query }: User.Request, response: Response, next: NextFunction) => {
    try {
      const encrypterHash = new Encrypter(process.env.EMAIL_VALIDATION_HASH)
      const decrypted = encrypterHash.getDecryptedHash(query.validation)

      const repo = getRepository(User)
      const user = await repo.findOneOrFail({
        where: { id: decrypted.identityUser }
      })

      // This prevents the validation token from re-entering the database
      if (user.validated) {
        return response.status(409).json({
          message: "The indicated email has already been validated!"
        })
      }

      // Save by repo
      await repo.save({
        ...user,
        validated: JSON.parse(String(decrypted.validated).toLowerCase())
      })
    } catch (error) {
      // TODO: Sentry error
      console.error(error)
    }

    // Next
    next()
  }
)
