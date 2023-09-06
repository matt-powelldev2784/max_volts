import { NavBar } from '@/app/components'
import { ClientMenu, ProductMenu, InvoiceMenu } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Hero } from './components/static'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
  if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <nav className="flex flex-row w-full justify-center items-start flex-wrap gap-2 md:mt-4">
        <InvoiceMenu />
        <ClientMenu />
        <ProductMenu />
      </nav>
    </main>
  )
}
