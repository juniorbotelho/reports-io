import express from "express"

// Registers
import { UsersController } from "@App:Controllers/UsersController"
import { UserRegisterValidation } from "@Provider:Middlewares/UserRegisterValidation"
import { UserMultipleAccount } from "@Provider:Middlewares/UserMultipleAccount"
import { UserEmailValidation } from "@Provider:Middlewares/UserEmailValidation"
import { GenerateWebToken } from "@Providers/middlewares/GenerateWebToken"
import { UserLoginValidation } from "@Providers/middlewares/UserLoginValidation"

// App
export const Routes = express.Router()

// Email
Routes.get(
  "/email",
  [UserEmailValidation],
  [GenerateWebToken],
  UsersController.index
)

// Signin
Routes.post(
  "/signin",
  [UserLoginValidation],
  [GenerateWebToken],
  UsersController.index
)

// Signup
Routes.post(
  "/signup",
  [UserRegisterValidation],
  [UserMultipleAccount],
  [GenerateWebToken],
  UsersController.store
)
