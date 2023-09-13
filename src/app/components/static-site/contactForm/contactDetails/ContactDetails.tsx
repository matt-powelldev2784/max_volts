import Image from 'next/image'

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
        <a className="text-lg border-b-[2px]" href="tel:07877 695 996">
          0208 888 8888
        </a>
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
          className="text-lg border-b-[2px]"
          href="mailto:info@max-volts.co.uk"
        >
          info@max-volts.co.uk
        </a>
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
