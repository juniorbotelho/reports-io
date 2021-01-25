import express, { Request, Response, NextFunction } from "express"

export const UserWebToken = express().use(
  async (request: Request, response: Response, next: NextFunction) => {
    // Next
    next()
  }
)
