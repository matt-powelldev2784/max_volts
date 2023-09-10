import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="relative w-screen min-w-[280px] bg-neutral-700 pb-10 ">
      <div className="flex flex-col gap-8 text-lg text-white md:flex-row">
        <div className="min-w-[320px] grow pt-4 text-center md:pl-8 md:text-left">
          <p className="pb-2 text-lg font-bold md:pb-4">Links</p>
          <div className="flex flex-row items-center justify-center gap-4 md:justify-start">
            <Link
              href="https://www.facebook.com/MaxVoltsElectricalServices"
              className=""
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
              className=""
            >
              <Image
                src="/icons/insta.svg"
                alt="Instagram Logo"
                width={40}
                height={40}
                className="h-[30px] md:h-[40px]"
              />
            </Link>
            <Link href="mailto:info@max-volts.co.uk" className="">
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

          <div className="min-w-[320px] mt-8 gap-2 flexCol md:flex md:gap-4 md:items-start md:justify-start md:flex-col">
            <p className="text-lg font-bold">Employee Dashboard</p>
            <Link href="/pages/dashboard" className="">
              <Image
                src="/icons/dashboard.svg"
                alt="EmailLogo"
                width={40}
                height={40}
                className="h-[28px] md:h-[38px]"
              />
            </Link>
          </div>
        </div>

        <div className="grow text-center md:pr-10 md:pt-4 md:text-right">
          <p className="font-bold ">Contact Us</p>
          <p>Max Volts Electrical Services</p>
          <p>Worcester Park</p>
          <p>Surrey</p>
          <p>KT11 1AA</p>

          <p className="font-bold  mt-8">Telephone</p>
          <p>07877 695 996</p>
        </div>
      </div>
    </footer>
  )
}
