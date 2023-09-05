import Image from 'next/image'
import Link from 'next/link'

export const NavBar = async () => {
  return (
    <header className="">
      <nav className="flex flex-row justify-between items-center bg-darkBlack">
        <Link
          href="/"
          className="w-[250px] md:w-[275px] lg:w-[300px] h-full m-2 lg:ml-8"
        >
          <Image
            src="/max_volts_logo.svg"
            alt="Max Volts Logo"
            width={873}
            height={156}
            className=""
          />
        </Link>

        <div className="flexRow gap-8 mx-8">
          <Link
            href="https://www.facebook.com/MaxVoltsElectricalServices"
            className=""
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Logo"
              width={40}
              height={40}
              className=""
            />
          </Link>
          <Link
            href="https://www.instagram.com/max.volts.electricalservices/?hl=en"
            className=""
          >
            <Image
              src="/icons/insta.svg"
              alt="Instagram Logo"
              width={40}
              height={40}
              className=""
            />
          </Link>
          <Link href="mailto:info@max-volts.co.uk" className="">
            <Image
              src="/icons/email_circle.svg"
              alt="EmailLogo"
              width={40}
              height={40}
              className=""
            />
          </Link>

          <Link href="tel:07877695996" className="">
            <Image
              src="/icons/tel_circle.svg"
              alt="EmailLogo"
              width={40}
              height={40}
              className=""
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}
