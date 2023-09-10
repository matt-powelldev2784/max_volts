import Image from 'next/image'

interface CardItemProps {
  title: string
  text: string
  image: string
}

export const CardItem = ({ title, text, image }: CardItemProps) => (
  <article className="flexCol p-4 lg:max-w-[400px] mx-auto">
    <div className="flexCol md:flexRow lg:flexCol md:gap-8  w-full lg:h-fit overflow-hidden">
      <div className="grow-2 rounded-3xl overflow-hidden w-full md:max-w-[350px] md:max-h-[350px] h-auto z-20">
        <Image
          src={image}
          alt={'Electrician tools'}
          width={510}
          height={510}
          className="object-cover max-h-[300px]"
        />
      </div>

      <div className="relative w-full h-fit md:h-full md:max-w-[400px] z-10 mt-3 md:m-0 flex flex-col justify-between border-2 border-transparent ">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-10 block md:hidden lg:block ">
          <Image
            src={'/services/spring.svg'}
            alt={'Electrician tools'}
            width={46}
            height={92}
            className=""
          />
        </div>

        <div className="w-full">
          <h2 className="text-center text-mvGreen text-lg font-bold my-2 md:my-0 border-2 border-mvGreen rounded-xl p-2">
            {title}
          </h2>

          <p className="text-justify text-white md:text-center lg:text-justify my-4">
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
    </div>
  </article>
)
