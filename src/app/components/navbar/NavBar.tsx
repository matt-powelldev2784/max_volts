import Image from 'next/image'
import { NavItems } from './components/NavItems'

export const NavBar = () => {
  return (
    <header className="">
      <nav className="flex flex-row justify-between items-center h-fit w-full bg-black">
        <a href="/menu" className="lg:hidden md:ml-4 ml-3 flexCol">
          <Image
            src={`/icons/hamburger.svg`}
            alt={'Hamburger Menu Icon'}
            width={30}
            height={30}
          />
        </a>
        <a href="/">
          <Image
            src="/max_volts_logo.svg"
            alt="Footboot Logo"
            width={300}
            height={40}
            className="sm:h-6 m-0 md:h-full p-2 lg:mx-5"
          />
        </a>
        <a href="/api/auth/signin" className="lg:hidden mr-3 md:mr-4">
          <Image
            src={`/icons/person.svg`}
            alt={'Hamburger Menu Icon'}
            width={30}
            height={30}
          />
        </a>

        <ul className="hidden lg:flex gap-8 items-center justify-center mx-8 h-full">
          <NavItems />
        </ul>
      </nav>
    </header>
  )
}
