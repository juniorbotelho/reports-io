import express, { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export const AuthWebToken = express().use(
  async (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.cookie
    const jsonWebToken = authHeader && String(authHeader).replace("token=", "")

    // Checks whether the header came without a token,
    if (!jsonWebToken) {
      return response.status(401).send("Unauthorized, invalid token.")
    }

    // Checks whether the token is valid and authorizes the client.
    jwt.verify(
      jsonWebToken,
      process.env.ACCESS_TOKEN_SECRET as string,
      (error: Error, user: any) => {
        if (error) {
          console.error(error)
          return response
            .status(403)
            .send("Unauthorized, an error occurred with the token.")
        }

        // Authorization performed successfully.
        request.body.auth = user

        // Next
        next()
      }
    )
  }
)
