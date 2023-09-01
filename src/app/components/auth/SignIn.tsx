import { OAuthProviders } from './oAuthProviders/OAuthProviders'
import { EmailProvider } from './emailProvider/EmailProvider'
import type { Provider } from '@/types'
import { PageTitle } from '@/app/ui'

interface SignInProps {
  oAuthProviders: Provider[]
  emailProvider: Provider[]
}

export const SignIn = ({ oAuthProviders, emailProvider }: SignInProps) => {
  return (
    <>
      <PageTitle
        text={'Login'}
        imgPath={'/icons/signin.svg'}
        divClasses="mt-4 mb-8"
      />
      <div className="flexCol gap-4">
        <OAuthProviders oAuthProviders={oAuthProviders} />
        <EmailProvider emailProvider={emailProvider} />
      </div>
    </>
  )
}
