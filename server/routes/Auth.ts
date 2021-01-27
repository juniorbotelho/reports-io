import express from "express"

// Registers
import { AuthController } from "@App:Controllers/AuthController"
import { UserWebToken } from "@Provider:Middlewares/UserWebToken"

// App
export const Routes = express.Router()

// Email
Routes.get("/private", [UserWebToken], AuthController.index)
