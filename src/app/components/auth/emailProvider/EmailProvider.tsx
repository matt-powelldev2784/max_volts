'use client'

import { signIn } from 'next-auth/react'
import { Provider } from '@/types'
import { AuthButton } from '../authButton/Auth-Button'

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

    console.log('email', email)

    if (email) {
      await signIn('email', {
        email,
        callbackUrl: '/',
      })
    }
  }

  const emailProviderJsx = emailProvider.map((provider) => {
    return (
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

        <AuthButton
          type="submit"
          buttonText={`Sign in with ${provider.name}`}
          optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
          imgPath={`/icons/${provider.name}.svg`}
        />
      </form>
    )
  })

  return <>{emailProviderJsx}</>
}
