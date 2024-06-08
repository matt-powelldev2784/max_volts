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
      <Link href={href} className="flexRow gap-1">
        <Image
          src={`/icons/${image}`}
          alt={alt}
          width={25}
          height={25}
          className=""
        />
        <div className="flexRow flex-start gap-0">
          <p className="hidden md:block text-white text-md leading-tight">
            {text}
          </p>
        </div>
      </Link>
    </li>
  )
}
