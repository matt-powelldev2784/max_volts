import React from 'react'

interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: any) => void
  // eslint-disable-next-line no-unused-vars
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
  optionalClasses?: string
  type?: 'submit' | 'reset' | 'button'
  buttonText: string
  disabled?: boolean
}

export const Button = ({
  onClick,
  optionalClasses,
  buttonText,
  type,
  onSubmit,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={`rounded-lg font-semibold outline-none p-2 h-[42.5px] ${optionalClasses}`}
    >
      {buttonText}
    </button>
  )
}
