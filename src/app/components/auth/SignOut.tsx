'use client'

import { signOut } from 'next-auth/react'
import { PageTitle } from '@/app/ui'
import { AuthButton } from './AuthButton/AuthButton'

export const SignOut = () => {
  const onSignOutClick = async () => {
    await signOut({ callbackUrl: '/' })
  }
  return (
    <>
      <AuthButton
        type="button"
        onClick={() => onSignOutClick}
        buttonText={`Log Out`}
        optionalClasses="text-white text-sm bg-darkBlack w-[300px] mt-8"
        imgPath={`/icons/signout.svg`}
      />
    </>
  )
}
