import { CreateInvoice, NavBar } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function CreateInvoicePage() {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <CreateInvoice />
    </main>
  )
}
