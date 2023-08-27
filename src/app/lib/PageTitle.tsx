import Image from 'next/image'

interface PageTitleProps {
  imgPath: string
  text: string
  imgClasses?: string
  pClasses?: string
  divClasses?: string
}

export const PageTitle = ({
  imgPath,
  text,
  imgClasses,
  pClasses,
  divClasses,
}: PageTitleProps) => {
  return (
    <div className={`flexRow gap-2 mt-4 mb-5 ${divClasses}`}>
      <Image
        src={imgPath}
        alt=""
        width={30}
        height={30}
        className={imgClasses}
      />
      <p className={`text-lg ${pClasses}`}>{text}</p>
    </div>
  )
}
