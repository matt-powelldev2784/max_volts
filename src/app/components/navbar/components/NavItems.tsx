import { navItemList } from '../data/navItemsList'
import { NavItem } from './NavItem'

export const NavItems = () => {
  const NavItems = navItemList.map((item) => {
    return <NavItem key={item.key} itemDetails={item} />
  })

  return (
    <ul className="flex justify-around md:justify-center md:gap-6 lg:gap-8 mx-8 h-full w-full lg:w-auto p-2 pb-3 min-w-[320px]">
      {...NavItems}
    </ul>
  )
}
