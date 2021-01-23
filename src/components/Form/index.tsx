import React, { useRef } from "react"
import { useRouter } from "next/router"
import { Form as FormContainer } from "@unform/web"

import { RegisterSchema } from "@Schema/Register"
import { serverApi } from "@Api/Server"

export const Form: React.FC<HTMLFormProps> = ({ children, ...rest }) => {
  const router = useRouter()
  const formRef = useRef(null)

  const handleFormSubmit = async (data: FormSubmitData) => {
    const schemaCompactRegister = new RegisterSchema()

    const schemaResolve = async (formData: FormSubmitData) => {
      serverApi
        .post("/users/signup", formData)
        .then(({ data }) => router.push({ ...data }))
        .catch(({ response }) => console.error(response.data.errors))
    }

    const schemaReject = async ({ error, errors }: ObjectValidationError) => {
      if (error) {
        error.inner.forEach((err) => (errors[err.path] = err.message))
        formRef.current.setErrors(errors)

        formRef.current.setFieldError(
          "password",
          "Must be minimum eight chars, at least one letter and one number."
        )
      }
    }

    // Validation
    schemaCompactRegister.validate(data).then(schemaResolve).catch(schemaReject)
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleFormSubmit} {...rest}>
      {children}
    </FormContainer>
  )
}
