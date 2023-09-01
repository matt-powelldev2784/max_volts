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
  imgPath: string
}

export const AuthButton = ({
  onClick,
  optionalClasses,
  buttonText,
  type,
  onSubmit,
  disabled,
  imgPath,
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      className={`rounded-lg font-semibold outline-none p-2 h-[50px] flexRow gap-4 ${optionalClasses}`}
    >
      <Image src={imgPath.toLowerCase()} alt="" width={30} height={30} />
      <p className="text-white text-base">{buttonText}</p>
    </button>
  )
}
