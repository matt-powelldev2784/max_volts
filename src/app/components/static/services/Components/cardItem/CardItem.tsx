import Image from 'next/image'

interface CardItemProps {
  title: string
  text: string
  image: string
}

export const CardItem = ({ title, text, image }: CardItemProps) => (
  <div className="flexCol p-4 bg-white lg:max-w-[400px] mx-auto">
    <div className="md:flexRow gap-8 lg:flexCol w-full md:h-[300px] lg:h-fit overflow-hidden">
      <div className="md:grow-2 lg:w-fit">
        <Image
          src={image}
          alt={'Electrician tools'}
          width={1000}
          height={1080}
          className="object-cover"
        />
      </div>
      <div className="w-full min-w-[250px]">
        <h2 className="text-center text-mvGreen text-lg font-bold my-2">
          {title}
        </h2>
        <p className="text-justify">{text}</p>
      </div>
    </div>
  </div>
)
