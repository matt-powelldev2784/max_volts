import { NavBar } from '@/app/components'
import { PageTitle } from '@/app/ui'
import Image from 'next/image'
import Link from 'next/link'

export default async function NotAuthorisedPage() {
  return (
    <>
      <NavBar />
      <PageTitle
        text={'Login Error'}
        imgPath={'/icons/error.svg'}
        divClasses="mt-4 mb-4"
      />
      <p className="text-center m-2">
        You are not authorised to view this page.
      </p>
      <p className="text-center m-2">
        Please contact the administrator to request access.
      </p>
    </>
  )
}
