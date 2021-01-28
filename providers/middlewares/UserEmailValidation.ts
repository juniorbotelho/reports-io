import express, { NextFunction } from "express"
import { User } from "@App:Models/User"
import { Encrypter } from "@Providers/Encrypter"
import { getRepository } from "typeorm"

// Types
type Request<B, Q> = import("express").Request<{}, {}, B, Q>
type Response = import("express").Response

// Interfaces
interface BodyRequest {
  id: string
  firstname: string
  lastname: string
  email: string
  username: string
  password: string
  firsthere: boolean
  validated: boolean
  createdAt: Date
  updatedAt: Date
}

interface QueryRequest {
  validation: string
  token: string
}

// Initialize the class from here
export const UserEmailValidation = express().use(
  async ({ query }: Request<BodyRequest, QueryRequest>, response: Response, next: NextFunction) => {
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
