declare interface IFirebaseUserModel {
  signup(auth: IFirebaseUser): Promise<TUserCredentials>
  signin(auth: IFirebaseUser): Promise<TUserCredentials>
}
