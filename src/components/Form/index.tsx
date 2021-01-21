import React, { useRef } from "react"
import * as Yup from "yup"
import { Form as FormContainer } from "@unform/web"

interface HTMLFormProps {
  className?: string
  action: string
  method: string
}

interface FormSubmitData {
  email: string
  username: string
  password: string
}

export const Form: React.FC<HTMLFormProps> = ({
  children,
  className,
  ...rest
}) => {
  const formRef = useRef(null)

  const handleFormSubmit = async (data: FormSubmitData) => {
    try {
      const schema = Yup.object().shape({
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

      await schema.validate(data, {
        abortEarly: false
      })

      console.log(data)
    } catch (error) {
      const validationErrors = {}

      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => (validationErrors[err.path] = err.message))

        formRef.current.setErrors(validationErrors)
      }
    }
  }

  return (
    <FormContainer
      className={className}
      ref={formRef}
      onSubmit={handleFormSubmit}
      {...rest}
    >
      {children}
    </FormContainer>
  )
}
