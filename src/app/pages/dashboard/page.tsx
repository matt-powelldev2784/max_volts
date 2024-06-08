import { NavBar } from '@/app/components'
import {
  ClientMenu,
  ProductMenu,
  InvoiceMenu,
  QuoteMenu,
} from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
  if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  return (
    <>
      <NavBar />
      <nav className="flex flex-row w-full justify-center items-start flex-wrap gap-2 md:mt-4">
        <QuoteMenu />
        <InvoiceMenu />
        <ClientMenu />
        <ProductMenu />
      </nav>
    </>
  )
}
