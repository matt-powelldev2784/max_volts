import Image from 'next/image'
import { LinkButton } from '../linkButton/LinkButton'

interface CardItemProps {
  title: string
  text: string
  image: string
}

export const CardItem = ({ title, text, image }: CardItemProps) => (
  <article className="w-fit h-fit sm:max-w-[520px] md:max-w-[800px] mx-auto flexCol md:flexRow lg:flexCol md:gap-8 overflow-hidden">
    <div className="relative rounded-3xl overflow-hidden w-full md:max-w-[350px] md:max-h-[205px] lg:max-h-[400px] z-20">
      <Image
        src={image}
        alt={'Electricial image'}
        width={510}
        height={510}
        className="object-cover"
      />
    </div>

    <div className="relative w-full h-fit md:h-full z-10 mt-3 md:m-0 flex flex-col justify-between">
      <div className="absolute -top-[116px] left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <Image
          src={'/services/spring.svg'}
          alt={'Electrician tools'}
          width={46}
          height={92}
          className="w-[75px]"
        />
      </div>

      <div className="w-full md:max-w-[350px] md:h-full lg:h-[250px] lg:mt-4 flex flex-col justify-between ">
        <h2 className="text-center text-mvGreen text-lg font-bold my-2 md:my-0 border-2 border-mvGreen rounded-xl p-2">
          {title}
        </h2>

        <p className="grow text-justify text-white md:text-center lg:text-justify my-4">
          {text}
        </p>

        <LinkButton linkTo="contact" text="MORE INFO" />
      </div>
    </div>
  </article>
)
