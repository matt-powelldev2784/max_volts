import Image from 'next/image'

interface CardItemProps {
  title: string
  text: string
  image: string
}

export const CardItem = ({ title, text, image }: CardItemProps) => (
  <article className="w-fit max-w-[520px] h-fit mx-auto flexCol md:flexRow lg:flexCol md:gap-8 overflow-hidden border-2 border-green-500">
    <div className="relative rounded-3xl overflow-hidden w-full md:max-w-[350px] z-20 border-2 border-red-500 ">
      <Image
        src={image}
        alt={'Electricial image'}
        width={510}
        height={510}
        className="object-cover"
      />
    </div>

    <div className="relative w-full h-fit md:h-full z-10 mt-3 md:m-0 flex flex-col justify-between ">
      <div className="absolute -top-[116px] left-1/2 -translate-x-1/2 z-10 block md:hidden lg:block ">
        <Image
          src={'/services/spring.svg'}
          alt={'Electrician tools'}
          width={46}
          height={92}
          className="w-[75px]"
        />
      </div>

      <div className="w-full h-[250px] md:max-w-[350px] lg:mt-4 flex flex-col justify-between border-2 border-blue-500">
        <h2 className="text-center text-mvGreen text-lg font-bold my-2 md:my-0 border-2 border-mvGreen rounded-xl p-2">
          {title}
        </h2>

        <p className="grow text-justify text-white md:text-center lg:text-justify my-4 border-2 border-red-500">
          {text}
        </p>

        <button
          type="button"
          className="text-white bg-mvOrange h-[45px] mt-4 md:mt-0 rounded-xl font-bold w-full"
        >
          ENQUIRE NOW
        </button>
      </div>
    </div>
  </article>
)
