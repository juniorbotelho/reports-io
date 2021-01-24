declare type HttpValidationError = import("yup").ValidationError

declare interface ObjectValidationError {
  error?: HttpValidationError
  errors?: {}
}

declare interface RegisterResponseError {
  location: string
  msg: string
  param: string
  value: string
}
