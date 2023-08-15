import Image from 'next/image'
import { NavItems } from './components/NavItems'

export const NavBar = () => {
  return (
    <header className="">
      <nav className="flex flex-col items-center md:justify-center lg:flex-row lg:justify-between h-fit w-full bg-darkBlack">
        <a
          href="/"
          className="w-[250px] md:w-[300px] h-full m-2 md:m-2 lg:ml-8"
        >
          <Image
            src="/max_volts_logo.svg"
            alt="Footboot Logo"
            width={873}
            height={156}
          />
        </a>

        <ul className="flex justify-around md:justify-center md:gap-8 mx-8 h-full w-full lg:w-auto p-2 pb-3 min-w-[320px]">
          <NavItems />
        </ul>
      </nav>
    </header>
  )
}
