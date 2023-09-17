'use client'

import { Link } from 'react-scroll'

interface LinkButtonProps {
  linkTo: string
  text: string
}

export const LinkButton = ({ linkTo, text }: LinkButtonProps) => {
  return (
    <Link
      to={linkTo}
      smooth={true}
      duration={500}
      className="text-white bg-mvOrange flexCol h-[45px] mt-4 md:mt-0 rounded-xl font-bold w-full"
    >
      {text}
    </Link>
  )
}
