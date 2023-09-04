'use client'

import React from 'react'
import { PageTitle } from '@/app/ui'
import { AuthButton } from '../authButton/Auth-Button'
import { signOut } from 'next-auth/react'

export const NotAuth = () => {
  const onSignOutClick = async () => {
    await signOut({ callbackUrl: '/api/auth/signin' })
  }

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

      <AuthButton
        onClick={onSignOutClick}
        type="button"
        buttonText={`Return to Login Page`}
        optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
        imgPath={`/icons/signin.svg`}
      />
    </div>
  )
}
