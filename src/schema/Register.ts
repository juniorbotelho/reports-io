import * as Yup from "yup"

// Interfaces
interface ValidationError extends Yup.ValidationError { }

declare interface FormSubmitData {
  email: string
  username: string
  password: string
}

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
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .required()
  })

  public async validate(data: FormSubmitData) {
    try {
      await this.schema.validate(data, {
        abortEarly: false
      })

      return Promise.resolve(data)
      // TODO: Catch errors with interface implemented
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        const instanceErrors = {
          error: error,
          errors: validationErrors
        }

        return Promise.reject<ValidationError>(instanceErrors)
      }
    }
  }
}
