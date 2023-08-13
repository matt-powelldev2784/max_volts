import Image from 'next/image'
import { NavItems } from './components/NavItems'

export const NavBar = () => {
  return (
    <header className="">
      <nav className="flex flex-row justify-between items-center h-fit w-full bg-darkBlack">
        <a href="/menu" className="lg:hidden ml-4 flexCol">
          <Image
            src={`/icons/hamburger.svg`}
            alt={'Hamburger Menu Icon'}
            width={30}
            height={30}
          />
        </a>

        <a href="/" className="w-full md:ml-4 flexRow md:w-fit">
          <div className="h-[60px] w-[210px] md:h-[70px] md:w-[300px] flexCol sm:ml-1">
            <Image
              src="/max_volts_logo.svg"
              alt="Footboot Logo"
              width={200}
              height={25}
              layout="responsive"
            />
          </div>
        </a>

        <a href="/api/auth/signin" className="lg:hidden mr-4">
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
