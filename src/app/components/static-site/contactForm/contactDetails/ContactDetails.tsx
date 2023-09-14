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
        <Link className="text-lg border-b-[2px]" href="tel:07877695996">
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

        <Link
          className="text-lg border-b-[2px]"
          href="mailto:info@max-volts.co.uk"
        >
          info@max-volts.co.uk
        </Link>
      </div>

      <div className="flexRow gap-8">
        <Image
          src="/icons/facebook.svg"
          alt="Email Icon"
          width={40}
          height={40}
          className="w-[50px]"
        />
        <Image
          src="/icons/insta.svg"
          alt="Email Icon"
          width={40}
          height={40}
          className="w-[50px]"
        />
      </div>
    </div>
  )
}
