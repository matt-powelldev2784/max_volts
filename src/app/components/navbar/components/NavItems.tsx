import { navItemList } from '../data/navItemsList'
import { NavItem } from './NavItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const NavItems = async () => {
  const session = await getServerSession(authOptions)

  const NavItems = navItemList.map((item) => {
    if (session && item.text === 'Login') return null
    return <NavItem key={item.key} itemDetails={item} />
  })

  return (
    <ul className="flex justify-around md:justify-center md:gap-6 lg:gap-8 mx-4 h-full w-full lg:w-auto p-2 pb-3 min-w-[320px]">
      {...NavItems}
    </ul>
  )
}
