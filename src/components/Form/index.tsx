import React, { useContext, useRef } from "react"
import { useRouter } from "next/router"
import { Form as FormContainer } from "@unform/web"

import { RegisterSchema } from "@Schema/Register"
import { serverApi } from "@Api/Server"

import { NotificationContext } from "@Hook:Components/Notification"

export const Form: React.FC<HTMLFormProps> = ({ children, ...rest }) => {
  const router = useRouter()
  const formRef = useRef(null)
  const notifications = useContext(NotificationContext)

  const handleFormSubmit = async (data: FormSubmitData) => {
    const schemaCompactRegister = new RegisterSchema()

    const schemaResolve = async (formData: FormSubmitData) => {
      serverApi
        .post("/users/signup", formData)
        .then(({ data }) => router.push({ ...data }))
        .catch(({ response }) => {
          const error: RegisterResponseError[] = response.data.errors

          // Error
          error.forEach((ctx) => {
            notifications.push({ message: ctx.msg, seconds: 60 })
          })
        })
    }

    const schemaReject = async ({ error, errors }: ObjectValidationError) => {
      if (error) {
        error.inner.forEach((err) => (errors[err.path] = err.message))
        formRef.current.setErrors(errors)
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
