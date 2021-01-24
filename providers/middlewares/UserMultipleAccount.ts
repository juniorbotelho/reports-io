import express, { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"
import { User } from "@App:Models/User"
import { getRepository } from "typeorm"

export const UserMultipleAccount = express().use(
  // Email must be unique
  body("email").custom(async (email: string) => {
    try {
      const repo = getRepository(User)
      const user = await repo.count({ where: { email } })

      if (user !== 0) throw new Error("Email already in use")
    } catch (error) {
      // If email already in use reject it
      return Promise.reject(error)
    }
  }),
  // Username must be unique
  body("username").custom(async (username: string) => {
    try {
      const repo = getRepository(User)
      const user = await repo.count({ where: { username } })

      if (user !== 0) throw new Error("Username already in use")
    } catch (error) {
      // If username already in use reject it
      return Promise.reject(error)
    }
  }),
  // Handler
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return response.status(409).json({
        errors: errors.array()
      })
    }

    // Next
    next()
  }
)
