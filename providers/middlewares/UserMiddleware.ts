import express, { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator"

export const UserRegisterMiddleware = express().use(
  // Email must be an email
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Must be a valid email")
    .toLowerCase(),
  // Username must be an string
  body("username")
    .isString()
    .trim()
    .escape()
    .toLowerCase()
    .isLength({ min: 6 })
    .withMessage("Must be at least six characters long"),
  // Password must be at least 8 char long
  body("password")
    .isString()
    .isLength({ min: 8 })
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage("Must be eight chars, at least one letter and one number"),
  // Handler
  async (request: Request, response: Response, next: NextFunction) => {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array()
      })
    }

    // Next
    next()
  }
)
