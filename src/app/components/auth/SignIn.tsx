import { OAuthProviders } from './oAuthProviders/OAuthProviders'
import type { Provider } from '@/types'
import { PageTitle } from '@/app/ui'

interface SignInProps {
  oAuthProviders: Provider[]
}

export const SignIn = ({ oAuthProviders }: SignInProps) => {
  return (
    <>
      <PageTitle
        text={'Login'}
        imgPath={'/icons/invoice.svg'}
        divClasses="mt-4 mb-8"
      />
      <OAuthProviders oAuthProviders={oAuthProviders} />
    </>
  )
}
