export const CreateErrorMessage = (errorMessage: string) => {
  return (
    <p className="m-2 p-2 text-darkRed border-2 border-darkRed">
      {errorMessage}
    </p>
  )
}
