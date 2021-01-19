declare type TDecoratorConstructor = { new (...args: any[]): {} }
declare type TUserCredentials = firebase.default.auth.UserCredential

declare interface IFirebaseUser {
  email: string
  password: string
}
