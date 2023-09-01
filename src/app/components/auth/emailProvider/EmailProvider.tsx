'use client'

import { signIn } from 'next-auth/react'
import { Provider } from '@/types'
import { OAuthButton } from '../oAuthButton/OAuthButton'

interface EmailProviderProps {
  emailProvider: Provider[]
}

export const EmailProvider = ({ emailProvider }: EmailProviderProps) => {
  const handleEmailSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const elements = form.elements as HTMLFormControlsCollection
    const emailInput = elements.namedItem('email') as HTMLInputElement
    const email = emailInput.value

    if (email) {
      await signIn('email', {
        email,
        callbackUrl: '/',
      })
    }
  }

  const emailProviderJsx = emailProvider.map((provider) => {
    return (
      <>
        <form
          key={provider.name}
          onSubmit={handleEmailSignIn}
          className="flexCol gap-2 w-[300px] mt-4"
        >
          <label htmlFor="email" className="w-full text-center text-sm">
            Sign In with magic link using email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded border p-2"
          />

          <OAuthButton
            type="submit"
            onClick={() => signIn(provider.id)}
            buttonText={`Sign in with ${provider.name}`}
            optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
            imgPath={`/icons/${provider.name}.svg`}
          />
        </form>
      </>
    )
  })

  return <>{emailProviderJsx}</>
}
