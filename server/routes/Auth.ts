import express from "express"

// Registers
import { AuthController } from "@App:Controllers/AuthController"
import { AuthWebToken } from "@Provider:Middlewares/AuthWebToken"

// App
export const Routes = express.Router()

// Email
Routes.post("/private", [AuthWebToken], AuthController.index)
