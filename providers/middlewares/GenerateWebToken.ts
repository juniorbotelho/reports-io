import express, { NextFunction } from "express"
import jwt from "jsonwebtoken"

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
export const GenerateWebToken = express().use(
  async ({ body }: Request<BodyRequest, QueryRequest>, response: Response, next: NextFunction) => {
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
