import React, { useRef } from "react"
import { Form as FormContainer } from "@unform/web"

import { RegisterSchema } from "@Schema/Register"

export const Form: React.FC<HTMLFormProps> = ({ children, ...rest }) => {
  const formRef = useRef(null)

  const handleFormSubmit = async (data: FormSubmitData) => {
    const schema = new RegisterSchema()

    // Validation
    schema.validate(data, (error, errors) => {
      error.inner.forEach((err) => (errors[err.path] = err.message))
      formRef.current.setErrors(errors)
    })
  }

  return (
    <FormContainer ref={formRef} onSubmit={handleFormSubmit} {...rest}>
      {children}
    </FormContainer>
  )
}
