import { NavBar } from '@/app/components'
import { PageTitle } from '@/app/ui'
import Image from 'next/image'
import Link from 'next/link'

export default async function AuthErrorPage() {
  return (
    <>
      <NavBar />
      <PageTitle
        text={'Login Error'}
        imgPath={'/icons/error.svg'}
        divClasses="mt-4 mb-4"
      />
      <p className="text-center m-2">Unable to login due to server error.</p>
      <p className="text-center m-2">
        Click login button to return to the login page to try again.
      </p>

      <Link href={'/pages/auth/signin'} className="flexRow gap-2">
        <Image
          src={'/icons/signin.svg'}
          alt={'login'}
          width={50}
          height={50}
          className="m-4"
        />
      </Link>
    </>
  )
}
