import React from 'react'
import { InputComponentTs } from './styles'

interface InputProps {
  type: 'radio' | 'checkbox'
  name?: string
  value?: string
  checked?: boolean
  id: string
  label?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  id,
  value,
  onChange,
}) => {
  if (type === 'radio') {
    return (
      <InputComponentTs
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    )
  } else {
    return (
      <InputComponentTs
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    )
  }
}

export default InputComponent
