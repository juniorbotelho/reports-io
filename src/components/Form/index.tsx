import React, { useContext, useRef } from "react"
import { useRouter } from "next/router"
import { Form as FormContainer } from "@unform/web"
import { RegisterSchema } from "@Schema/Register"
import { serverApi } from "@Api/Server"
import { NotificationContext } from "@Hook:Components/Notification"

// Interfaces
interface ValidationError {
  error?: import("yup").ValidationError
  errors?: {}
}

interface ResponseError {
  location: string
  msg: string
  param: string
  value: string
}

declare interface FormSubmitData {
  email: string
  username: string
  password: string
}

// Initialize
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
          const error: ResponseError[] = response.data.errors

          // Error
          error.forEach((ctx) => {
            notifications.push({ message: ctx.msg, seconds: 60 })
          })
        })
    }

    const schemaReject = async ({ error, errors }: ValidationError) => {
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
