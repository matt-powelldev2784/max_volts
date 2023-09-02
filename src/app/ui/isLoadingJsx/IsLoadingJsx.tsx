import { isInteger } from 'formik'
import Image from 'next/image'

interface IsLoadingJsxProps {
  positionRelative?: boolean
}

export const IsLoadingJsx = (positionRelative: IsLoadingJsxProps) => {
  return (
    <div
      className={`bottom-0 w-full flexRow ${
        positionRelative ? 'relative' : 'fixed'
      }`}
    >
      <div className="">
        <Image
          src="/icons/loading.svg"
          alt="Person icon"
          width={40}
          height={40}
          className="animate-spin p-2"
        />
      </div>
    </div>
  )
}
