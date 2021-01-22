import express, { Request, Response } from "express"
import { UserRegisterMiddleware } from "@Provider:Middlewares/UserMiddleware"

export const Routes = express.Router()

Routes.post(
  "/signup",
  [UserRegisterMiddleware],
  async ({ body }: Request, response: Response) => {
    const base64 = Buffer.from(
      JSON.stringify({
        email: body.email,
        username: body.username
      })
    ).toString("base64")

    response.status(200).send({
      pathname: "/accounts/validation",
      query: { info: base64 }
    })
  }
)
