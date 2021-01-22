import express, { Request, Response } from "express"

export const Routes = express.Router()

Routes.post("/signup", async (request: Request, response: Response) => {
  response.status(200).send("/accounts/validation")
})
