import React, { useEffect, useRef } from "react"
import { useField } from "@unform/core"

import { Input as InputContainer } from "@Style:Components/Input"

interface HTMLInputProps {
  type: string
  name: string
  className?: string
  placeholder?: string
  value?: string
}

export const Input: React.FC<HTMLInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null)

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => ref.value
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputContainer
        data-error={error}
        className={error ?? "has-error"}
        ref={inputRef}
        name={name}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  )
}
