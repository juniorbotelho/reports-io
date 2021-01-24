declare namespace User {
  export type Request = import("express").Request<{}, {}, UserBodyRequest>
  export type Response = import("express").Response
  export type UserModel = import("@App:Models/User").User

  interface UserBodyRequest extends UserModel {}
}
