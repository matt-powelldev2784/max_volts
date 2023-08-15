import Image from 'next/image'
import Link from 'next/link'

interface ItemDetails {
  href: string
  image: string
  alt: string
  text: string
}

interface NavItemProps {
  itemDetails: ItemDetails
}

export const NavItem = ({ itemDetails }: NavItemProps) => {
  const { href, image, alt, text } = itemDetails

  return (
    <li>
      <Link href={href} className="flexRow gap-2">
        <Image
          src={`/icons/${image}`}
          alt={alt}
          width={25}
          height={25}
          className=""
        />
        <p className="hidden md:block text-white">{text}</p>
      </Link>
    </li>
  )
}
