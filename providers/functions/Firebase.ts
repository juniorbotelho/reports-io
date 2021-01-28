import { Firebase as Fire } from "@Providers/Firebase"

// Types
type Constructor<T> = new (...args: any[]) => T

// Interfaces
declare interface FirebaseUser {
  email: string
  password: string
}

// Abstract class
export abstract class BaseFirebase {
  createUserWithEmailAndPassword(
    auth: FirebaseUser
  ): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }

  signInWithEmailAndPassword(
    auth: FirebaseUser
  ): Promise<firebase.default.auth.UserCredential> {
    throw new Error("Method not implemented.")
  }
}

export function Firebase() {
  return <T extends Constructor<BaseFirebase>>(Constructor: T) => {
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
      }: FirebaseUser) {
        try {
          const getUserInfo = await Fire.getConnection()
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
      }: FirebaseUser) {
        try {
          const getUserInfo = await Fire.getConnection()
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
