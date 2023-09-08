import Image from 'next/image'

interface CardItemProps {
  title: string
  text: string
  image: string
}

export const CardItem = ({ title, text, image }: CardItemProps) => (
  <div className="flexCol p-4 lg:max-w-[400px] mx-auto">
    <div className="flexCol md:flexRow lg:flexCol md:gap-8  w-full lg:h-fit overflow-hidden">
      <div className="grow-2 w-full md:max-w-[350px] md:max-h-[350px] h-auto">
        <Image
          src={image}
          alt={'Electrician tools'}
          width={510}
          height={510}
          className="object-contain max-h-[300px"
        />
      </div>
      <div className="w-11/12 lg:h-40 md:max-w-[400px]">
        <h2 className="text-center text-mvGreen text-lg font-bold my-2">
          {title}
        </h2>
        <p className="text-justify text-white">{text}</p>
      </div>
    </div>
  </div>
)
