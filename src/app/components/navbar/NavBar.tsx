import Image from 'next/image'
import { NavItems } from './components/NavItems'
import { IsLoggedIn } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const NavBar = async () => {
  const session = await getServerSession(authOptions)
  const userImage =
    typeof session?.user?.image === 'string' ? session?.user?.image : null

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

        <div className="flexRow w-full md:w-auto lg:mr-6">
          {session?.user?.isAdmin ? <NavItems /> : null}
          {userImage !== null ? (
            <Image
              src={userImage}
              alt="User Image"
              width={40}
              height={40}
              className="clipPathCircle mr-4 lg:block hidden"
            />
          ) : null}
        </div>
      </nav>
    </header>
  )
}
