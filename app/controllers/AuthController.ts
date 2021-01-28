export class AuthController {
  public static async index(request, response) {
    response.status(200).json({
      pathname: "/user/dashboard",
      query: {}
    })
  }
}
