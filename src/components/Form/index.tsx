import React, { useRef } from "react"
import { Form as FormContainer } from "@unform/web"

import { RegisterSchema } from "@Schema/Register"

export const Form: React.FC<HTMLFormProps> = ({ children, ...rest }) => {
  const formRef = useRef(null)

  const handleFormSubmit = async (data: FormSubmitData) => {
    const schemaCompactRegister = new RegisterSchema()

    const schemaResolve = (formData: FormSubmitData) => {
      console.log(formData)
    }

    const schemaReject = ({ error, errors }: ObjectValidationError) => {
      error.inner.forEach((err) => (errors[err.path] = err.message))
      formRef.current.setErrors(errors)
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
