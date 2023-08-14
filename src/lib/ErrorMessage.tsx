export interface ErrorMessageProps {
  errorMessage?: string
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <p className="text-sm m-2 p-2 text-darkRed border-2 border-darkRed text-center text-bold">
      {errorMessage || 'Server Error. Please Try Again Later.'}
    </p>
  )
}
