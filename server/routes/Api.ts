import express, { Request, Response } from "express"

export const Routes = express.Router()

Routes.post("/users/signup", async (request: Request, response: Response) => {
  console.log(request.body)
})
