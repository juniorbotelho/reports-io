import React, { useEffect, useRef } from "react"
import { useField } from "@unform/core"

import { Input as InputContainer } from "@Style:Components/Input"

export const Input: React.FC<HTMLInputProps> = ({ name, ...rest }) => {
  const { fieldName, registerField, error } = useField(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement) => ref.value
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputContainer
        data-error={error}
        className={error}
        ref={inputRef}
        name={name}
        spellCheck={true}
        {...rest}
      />

      {error && (
        <span className="error">
          <>{error}</>
        </span>
      )}
    </>
  )
}
