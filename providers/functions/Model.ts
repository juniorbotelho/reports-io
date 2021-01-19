import { getConnection } from "@Providers/Firebase"

// Abstract class
export abstract class BaseAuthenticate implements IFirebaseUserModel {
  signup(auth: IFirebaseUser): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }

  signin(auth: IFirebaseUser): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }
}

export function Authenticate() {
  return <T extends TDecoratorUser>(Constructor: T) => {
    return class extends Constructor {
      /**
       *
       * Public properties from user likes token,
       * credentials, info and others...
       */
      public subject = {}

      public async signup({ email, password }: IFirebaseUser) {
        const getUserInfo = await getConnection()
          .auth()
          .createUserWithEmailAndPassword(email, password)

        // Returns firebase UserCredentials type
        return getUserInfo
      }

      public async signin({ email, password }: IFirebaseUser) {
        const getUserInfo = await getConnection()
          .auth()
          .signInWithEmailAndPassword(email, password)

        // Returns firebase UserCredentials type
        return getUserInfo
      }
    }
  }
}
