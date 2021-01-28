import express, { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const GenerateWebToken = express().use(
  async ({ body }: User.Request, response: Response, next: NextFunction) => {
    const contentBody = {
      username: body.username,
      email: body.email
    }

    try {
      const jsonWebToken = jwt.sign(
        contentBody,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: 1800000 }
      )

      // Sends the newly generated jsonWebToken.
      response.cookie("token", jsonWebToken, {
        httpOnly: true,
        maxAge: 1800000
      })

      // Next
      next()
    } catch (error) {
      // TODO: Sentry Error
      console.error(error)
    }
  }
)
