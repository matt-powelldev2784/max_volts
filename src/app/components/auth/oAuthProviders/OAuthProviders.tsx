'use client'

import { AuthButton } from '../authButton/AuthButton'
import { signIn } from 'next-auth/react'
import { Provider } from '@/types'
interface OAuthProviderProps {
  oAuthProviders: Provider[]
}

export const OAuthProviders = ({ oAuthProviders }: OAuthProviderProps) => {
  const oAuthProvidersJsx = oAuthProviders.map((provider) => {
    return (
      <div key={provider.name}>
        <AuthButton
          type="button"
          onClick={() => signIn(provider.id)}
          buttonText={`Sign in with ${provider.name}`}
          optionalClasses="text-white text-sm bg-darkBlack w-[300px]"
          imgPath={`/icons/${provider.name}.svg`}
        />
      </div>
    )
  })

  return <div className="flexCol gap-4">{...oAuthProvidersJsx}</div>
}
