import { getConnection } from "@Providers/Firebase"

export function User() {
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
