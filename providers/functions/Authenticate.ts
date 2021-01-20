import { Firebase } from "@Providers/Firebase"

// Abstract class
export abstract class BaseAuthenticate {
  static signup(
    auth: IFirebaseUser
  ): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }

  static signin(
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

      public static async signup({ email, password }: IFirebaseUser) {
        const getUserInfo = await Firebase.getConnection()
          .auth()
          .createUserWithEmailAndPassword(email, password)

        // Returns firebase UserCredentials type
        return getUserInfo
      }

      public static async signin({ email, password }: IFirebaseUser) {
        const getUserInfo = await Firebase.getConnection()
          .auth()
          .signInWithEmailAndPassword(email, password)

        // Returns firebase UserCredentials type
        return getUserInfo
      }
    }
  }
}
