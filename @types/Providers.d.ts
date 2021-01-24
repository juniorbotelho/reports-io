declare type Constructor<T> = new (...args: any[]) => T
declare type UserCredentials = firebase.default.auth.UserCredential

declare interface DynamicConstructor<T> {
  new (...a: any[]): Pick<T, keyof T>
}

declare interface DecoratorConstructor {
  new (...args: any[]): {}
}

declare interface IFirebaseUser {
  email: string
  password: string
}
