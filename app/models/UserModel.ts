import {
  Authenticate,
  BaseAuthenticate
} from "@Provider:Functions/Authenticate"

@Authenticate()
export class User extends BaseAuthenticate {}
