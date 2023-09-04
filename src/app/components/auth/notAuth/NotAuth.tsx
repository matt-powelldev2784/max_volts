import React from 'react'
import { PageTitle } from '@/app/ui'
import { AuthButton } from '../authButton/Auth-Button'
import Link from 'next/link'

export const NotAuth = () => {
  return (
    <div className="flexCol">
      <PageTitle
        text={'Login Error'}
        imgPath={'/icons/error.svg'}
        divClasses="mt-4 mb-4"
      />
      <p className="text-center m-2">
        You are not authorised to view this page.
      </p>
      <p className="text-center m-2 mb-8">
        Please contact the administrator to request access.
      </p>
      <Link href={'/api/auth/signin'}>
        <AuthButton
          type="button"
          buttonText={`Return to Login Page`}
          optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
          imgPath={`/icons/signin.svg`}
        />
      </Link>
    </div>
  )
}
