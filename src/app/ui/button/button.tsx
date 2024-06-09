import React from 'react'
import Image from 'next/image'

interface ButtonProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: any) => void
  // eslint-disable-next-line no-unused-vars
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
  optionalClasses?: string
  type?: 'submit' | 'reset' | 'button'
  buttonText: string
  disabled?: boolean
  isLoading?: boolean
  children?: React.ReactNode
}

export const Button = ({
  onClick,
  optionalClasses,
  buttonText,
  type,
  onSubmit,
  disabled,
  isLoading,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={`flexCol rounded-lg font-semibold outline-none p-2 h-[42.5px] ${optionalClasses}`}
    >
      {!isLoading ? [children] : null}
      {!isLoading ? buttonText : null}
      {isLoading ? (
        <Image
          src="/icons/loading_white.svg"
          alt="Person icon"
          width={40}
          height={40}
          className="animate-spin p-2 min-w-[40px]"
        />
      ) : null}
    </button>
  )
}
