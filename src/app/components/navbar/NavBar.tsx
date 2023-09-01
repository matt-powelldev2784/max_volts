import Image from 'next/image'
import { NavItems } from './components/NavItems'
import { IsLoggedIn } from '@/app/components'

export const NavBar = () => {
  return (
    <header className="">
      <IsLoggedIn />
      <nav className="flex flex-col items-center md:justify-center lg:flex-row lg:justify-between h-fit w-full bg-darkBlack">
        <a
          href="/"
          className="w-[250px] md:w-[275px] lg:w-[300px] h-full mt-1 md:m-2 lg:ml-8"
        >
          <Image
            src="/max_volts_logo.svg"
            alt="Footboot Logo"
            width={873}
            height={156}
          />
        </a>

        <NavItems />
      </nav>
    </header>
  )
}
