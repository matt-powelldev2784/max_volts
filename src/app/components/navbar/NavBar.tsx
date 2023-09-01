import Image from 'next/image'
import { NavItems } from './components/NavItems'
import { IsLoggedIn } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export const NavBar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <header className="">
      <IsLoggedIn />
      <nav
        className={`flex flex-col items-center md:justify-center lg:flex-row  h-fit w-full bg-darkBlack ${
          session ? 'lg:justify-between' : 'lg:justify-center'
        }`}
      >
        <a
          href="/"
          className="w-[250px] md:w-[275px] lg:w-[300px] h-full m-2 lg:ml-8"
        >
          <Image
            src="/max_volts_logo.svg"
            alt="Footboot Logo"
            width={873}
            height={156}
            className=""
          />
        </a>

        {session ? <NavItems /> : null}
      </nav>
    </header>
  )
}
