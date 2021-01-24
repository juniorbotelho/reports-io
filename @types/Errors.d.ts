declare type HttpValidationError = import("yup").ValidationError

declare interface ObjectValidationError {
  error?: HttpValidationError
  errors?: {}
}
