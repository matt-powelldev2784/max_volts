import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'
import { ServerError } from '@/app/lib/ServerError'
import { OAuthProviders } from '@/app/components/auth/oAuthProviders/OAuthProviders'

export default async function SignInPage() {
  const providers = await getAuthProviders()
  if (!providers) return <ServerError />
  const { oAuthProviders, emailProvider } = providers

  console.log('emailProvider', emailProvider)

  return (
    <>
      <NavBar />
      <p>Sign In Page</p>
      <OAuthProviders oAuthProviders={oAuthProviders} />
    </>
  )
}
