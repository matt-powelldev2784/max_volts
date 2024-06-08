export interface ErrorMessageProps {
  errorMessage?: string
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <p className="text-sm m-2 text-red-500 p-2 border-2 border-darkRed text-center text-bold max-w-[400px]">
      {errorMessage || 'Server Error. Please Try Again Later.'}
    </p>
  )
}
