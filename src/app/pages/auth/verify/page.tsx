import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'

export default async function VerifyEmailPage() {
  const providers = await getAuthProviders()
  console.log('providers', providers)
  return (
    <>
      <NavBar />
    </>
  )
}
