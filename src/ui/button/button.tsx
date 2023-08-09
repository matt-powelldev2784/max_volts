import React from 'react'

interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
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
      className={`rounded-xl border-2 border-primaryGreen bg-primaryGreen font-semibold text-darkBlack outline-none focus:border-2 focus:border-darkBlack ${optionalClasses}`}
    >
      {buttonText}
    </button>
  )
}
