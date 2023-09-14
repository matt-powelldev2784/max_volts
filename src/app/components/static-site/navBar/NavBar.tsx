import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <header className="">
      <nav className="w-full flex flex-col justify-between items-center bg-darkBlack md:flex-row">
        <Link
          href="/"
          className="w-[280px] md:w-[275px] lg:w-[300px] h-full m-2 md:ml-8"
        >
          <Image
            src="/max_volts_logo.svg"
            alt="Max Volts Logo"
            width={873}
            height={156}
            className=""
          />
        </Link>

        <div className="w-full flex justify-evenly md:justify-center md:w-auto mt-1 md:mt-0md:w-auto md:mx-8 md:my-2 md:gap-4 lg:gap-8 h-[40px]">
          <Link
            href="https://www.facebook.com/MaxVoltsElectricalServices"
            target="_blank"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Logo"
              width={40}
              height={40}
              className="h-[30px] md:h-[40px]"
            />
          </Link>

          <Link
            href="https://www.instagram.com/max.volts.electricalservices/?hl=en"
            target="_blank"
          >
            <Image
              src="/icons/insta.svg"
              alt="Instagram Logo"
              width={40}
              height={40}
              className="h-[30px] md:h-[40px]"
            />
          </Link>

          <Link href="mailto:info@max-volts.co.uk">
            <Image
              src="/icons/email_circle.svg"
              alt="EmailLogo"
              width={40}
              height={40}
              className="h-[30px] md:h-[40px]"
            />
          </Link>

          <Link href="tel:07877695996" className="">
            <Image
              src="/icons/tel_circle.svg"
              alt="EmailLogo"
              width={40}
              height={40}
              className="h-[30px] md:h-[40px]"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}
