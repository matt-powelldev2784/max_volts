import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'
import { ServerError } from '@/app/lib/ServerError'
import { SignIn } from '@/app/components'

export default async function SignInPage() {
  const providers = await getAuthProviders()
  if (!providers) return <ServerError />
  const { oAuthProviders, emailProvider } = providers

  console.log('emailProvider', emailProvider)

  return (
    <>
      <NavBar />
      <SignIn oAuthProviders={oAuthProviders} />
    </>
  )
}
