import * as Yup from "yup"

export class RegisterSchema {
  private schema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string()
      .lowercase()
      .min(6)
      .matches(/[a-z0-9]/g)
      .trim()
      .required(),
    password: Yup.string()
      .min(8)
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
      .required()
  })

  public async validate(data: FormSubmitData, callback: CallbackValidation) {
    try {
      await this.schema.validate(data, {
        abortEarly: false
      })

      // TODO: Catch axios error if exists
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        // CallbackValidation
        callback(error, validationErrors)
      }
    }
  }
}
