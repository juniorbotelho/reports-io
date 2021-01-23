import express from "express"

// Registers
import { UsersController } from "@App:Controllers/UsersController"
import { UserRegisterValidation } from "@Provider:Middlewares/UserRegisterValidation"

// App
export const Routes = express.Router()

Routes.post("/signup", [UserRegisterValidation], UsersController.store)
