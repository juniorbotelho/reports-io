import { User } from "@App:Models/User"
import express, { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"
import { getRepository } from "typeorm"

export const UserLoginValidation = express().use(
  // Username must be an string
  body("username")
    .isString()
    .trim()
    .escape()
    .toLowerCase()
    .withMessage("Must be a valid email or username")
    .custom(async (username: string) => {
      try {
        // Find on email field
        if (username.indexOf("@") !== -1) {
          const repo = getRepository(User)
          const user = await repo.count({ where: { email: username } })
          if (!user) throw new Error(`No email was found by ${username}`)
        }

        // Find on username field
        if (username.indexOf("@") === -1) {
          const repo = getRepository(User)
          const user = await repo.count({ where: { username } })
          if (!user) throw new Error(`No user was found by ${username}`)
        }
      } catch (error) {
        // Reject if user not found
        return Promise.reject(error)
      }
    }),
  // Password must be at least 8 char long
  body("password")
    .isString()
    .isLength({ min: 8 })
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage("Must be eight chars, at least one letter and one number"),
  // Handler
  // TODO: Fix types from request
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array()
      })
    }

    // If everything went according to plan, the request pattern will change.
    if (request.body.username.indexOf("@") !== -1) {
      request.body = {
        email: request.body.username,
        password: request.body.password
      }
    }

    // Next
    next()
  }
)
