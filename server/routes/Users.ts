import express from "express"

// Registers
import { UsersController } from "@App:Controllers/UsersController"
import { UserRegisterValidation } from "@Provider:Middlewares/UserRegisterValidation"
import { UserMultipleAccount } from "@Providers/middlewares/UserMultipleAccount"

// App
export const Routes = express.Router()

Routes.post(
  "/signup",
  [UserRegisterValidation],
  [UserMultipleAccount],
  UsersController.store
)
