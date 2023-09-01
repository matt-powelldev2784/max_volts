'use client'

import { Button } from '@/app/ui'
import { signIn } from 'next-auth/react'
import { OAuthProviderType } from 'next-auth/providers/oauth-types'

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}

interface OAuthProviderProps {
  oAuthProviders: Provider[]
}

export const OAuthProviders = ({ oAuthProviders }: OAuthProviderProps) => {
  const oAuthProvidersJsx = oAuthProviders.map((provider) => {
    return (
      <div key={provider.name}>
        <Button
          type="button"
          onClick={() => signIn(provider.id)}
          buttonText={`Sign in with ${provider.name}`}
          optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        />
      </div>
    )
  })

  return <div className="flexCol gap-4">{...oAuthProvidersJsx}</div>
}
