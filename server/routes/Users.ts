import express from "express"

// Registers
import { UsersController } from "@App:Controllers/UsersController"
import { UserRegisterValidation } from "@Provider:Middlewares/UserRegisterValidation"
import { UserMultipleAccount } from "@Providers/middlewares/UserMultipleAccount"
import { UserEmailValidation } from "@Provider:Middlewares/UserEmailValidation"
import { UserWebToken } from "@Provider:Middlewares/UserWebToken"

// App
export const Routes = express.Router()

// Email
Routes.get(
  "/email",
  [UserEmailValidation],
  [UserWebToken],
  UsersController.index
)

// Signup
Routes.post(
  "/signup",
  [UserRegisterValidation],
  [UserMultipleAccount],
  UsersController.store
)
