import { Firebase } from "@Providers/Firebase"

// Abstract class
export abstract class BaseAuthenticate {
  createUserWithEmailAndPassword(
    auth: IFirebaseUser
  ): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }

  signInWithEmailAndPassword(
    auth: IFirebaseUser
  ): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }
}

export function Authenticate() {
  return <T extends Constructor<BaseAuthenticate>>(Constructor: T) => {
    return class extends Constructor {
      /**
       *
       * Public properties from user likes token,
       * credentials, info and others...
       */
      public subject = {}

      public async createUserWithEmailAndPassword({
        email,
        password
      }: IFirebaseUser) {
        try {
          const getUserInfo = await Firebase.getConnection()
            .auth()
            .createUserWithEmailAndPassword(email, password)

          getUserInfo.user.sendEmailVerification({
            url: `${process.env.SERVER_HOST}/accounts/finish/?accountInfo=${getUserInfo.operationType}`,
            handleCodeInApp: true
          })

          // Returns firebase UserCredentials type
          return getUserInfo
        } catch (error) {
          throw new Error(error)
        }
      }

      public async signInWithEmailAndPassword({
        email,
        password
      }: IFirebaseUser) {
        try {
          const getUserInfo = await Firebase.getConnection()
            .auth()
            .signInWithEmailAndPassword(email, password)

          // Returns firebase UserCredentials type
          return getUserInfo
        } catch (error) {
          throw new Error(error)
        }
      }
    }
  }
}
