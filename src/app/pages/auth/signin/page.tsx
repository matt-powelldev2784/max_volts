import { NavBar } from '@/app/components'
import { getAuthProviders } from '../getProviders'
import { SignIn } from '@/app/components'
import { redirect } from 'next/navigation'

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
       ) : (
         redirect('/pages/auth/error')
       )}
     </>
   )
}
