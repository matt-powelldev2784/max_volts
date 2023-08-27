import Image from 'next/image'

interface PageTitleProps {
  imgPath: string
  text: string
  imgClasses?: string
  pClasses?: string
}

export const PageTitle = ({
  imgPath,
  text,
  imgClasses,
  pClasses,
}: PageTitleProps) => {
  return (
    <div className="flexRow gap-2 mt-4 mb-5">
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
