import { navItemList } from '../data/navItemsList'
import { NavItem } from './NavItem'

export const NavItems = () => {
  const NavItems = navItemList.map((item) => {
    return <NavItem key={item.key} itemDetails={item} />
  })

  return <>{...NavItems}</>
}
