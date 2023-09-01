import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'
import { ServerError } from '@/app/lib/ServerError'

export default async function SignInPage() {
  const providers = await getAuthProviders()
  if (!providers) return <ServerError />
  const { oAuthProviders, emailProvider } = providers
  // console.log('providers', providers)

  console.log('emailProvider', emailProvider)
  console.log('oAuthProviders', oAuthProviders)

  return (
    <>
      <NavBar />
      <p>Sign In Page</p>
    </>
  )
}
