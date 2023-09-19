import Image from 'next/image'
import Link from 'next/link'

export const ContactDetails = () => {
  return (
    <div className="hidden lg:flexCol gap-16 w-[250px] min-w-[250px] text-lightGrey lg:mx-8">
      <div className="flexCol gap-2">
        <Image
          src="/icons/contact_tel.svg"
          alt="Telephone Icon"
          width={40}
          height={40}
          className="w-[80px]"
        />
        <p className="text-lg">PHONE:</p>
        <Link className="text-lg" href="tel:07877695996">
          07877 695 996
        </Link>
      </div>

      <div className="flexCol gap-2">
        <Image
          src="/icons/contact_at.svg"
          alt="Email Icon"
          width={40}
          height={40}
          className="w-[80px]"
        />
        <p className="text-lg">EMAIL:</p>

        <a
          className="text-lg text-center"
          href="mailto:max.volts.electricalservices@gmail.com"
        >
          MaxVoltsElectricalServices<br></br>@gmail.com
        </a>
      </div>

      <div className="flexRow gap-8">
        <Link
          href="https://www.facebook.com/MaxVoltsElectricalServices"
          target="_blank"
        >
          <Image
            src="/icons/facebook.svg"
            alt="Email Icon"
            width={40}
            height={40}
            className="w-[50px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/max.volts.electricalservices/?hl=en"
          target="_blank"
        >
          <Image
            src="/icons/insta.svg"
            alt="Email Icon"
            width={40}
            height={40}
            className="w-[50px]"
          />
        </Link>
      </div>
    </div>
  )
}
