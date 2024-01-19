import React from 'react'

interface InputProps {
  type: 'text' | 'radio' | 'checkbox' | 'submit' | 'reset'
  name?: string
  value?: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  value,
  checked,
  onChange,
}) => {
  if (type === 'radio' || type === 'checkbox') {
    return (
      <input
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    )
  } else {
    return <input type={type} name={name} value={value} onChange={onChange} />
  }
}

export default InputComponent
