import express, { Request, Response } from "express"
import { UserRegisterMiddleware } from "@Provider:Middlewares/UserMiddleware"

export const Routes = express.Router()

Routes.post(
  "/signup",
  [UserRegisterMiddleware],
  async (request: Request, response: Response) => {
    response.status(200).send("/accounts/validation")
  }
)
