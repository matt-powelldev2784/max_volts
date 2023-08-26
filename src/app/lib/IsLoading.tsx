import Image from 'next/image'

interface isLoadingProps {
  isLoading: boolean
  imgPath: string
}

export const IsLoading = ({ isLoading, imgPath }: isLoadingProps) => {
  const loadingJSX = (
    <Image
      src={imgPath}
      alt="Person icon"
      width={30}
      height={30}
      className="mt-6 animate-spin"
    />
  )

  return (
    <div className="flex w-full items-center justify-center overflow-hidden ">
      {isLoading ? loadingJSX : null}
    </div>
  )
}
