declare type TDecoratorUser = { new (...args: any[]): {} }
declare type TUserCredentials = firebase.default.auth.UserCredential

declare interface IFirebaseUser {
  email: string
  password: string
}
