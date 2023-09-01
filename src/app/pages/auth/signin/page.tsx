import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'
import { ServerError } from '@/app/lib/ServerError'
import { SignIn } from '@/app/components'

export default async function SignInPage() {
  const providers = await getAuthProviders()

  return (
    <>
      <NavBar />
      {providers ? (
        <SignIn
          oAuthProviders={providers.oAuthProviders}
          emailProvider={providers.emailProvider}
        />
      ) : null}
    </>
  )
}
