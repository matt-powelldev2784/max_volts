'use client'

import { PageTitle } from '@/app/ui'
import { AuthButton } from '../authButton/Auth-Button'

export const CheckEmail = () => {
  return (
    <div className="flexCol">
      <PageTitle
        text={'Email Verification Sent'}
        imgPath={'/icons/email.svg'}
        divClasses="mt-4 mb-4"
      />
      <p className="text-center m-2">
        A sign in link has been sent to your email address.
      </p>
      <p className="text-center m-2">
        Navigate to your email provider and click the magic link or use the
        buttons below.
      </p>

      <div className="flexCol gap-4 mt-4">
        <AuthButton
          type="button"
          onClick={() => {
            window.open('https://www.googlemail.com', '_blank')
          }}
          buttonText={`Goto Gmail`}
          optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
          imgPath={`/icons/google.svg`}
        />
        <AuthButton
          type="button"
          onClick={() => {
            window.open('https://www.outlook.com', '_blank')
          }}
          buttonText={`Goto Outlook`}
          optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
          imgPath={`/icons/outlook.svg`}
        />
      </div>
    </div>
  )
}
