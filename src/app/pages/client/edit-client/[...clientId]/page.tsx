import { EditClient, NavBar } from '@/app/components'
import { getClient } from '../getClient'
import { ServerError } from '@/app/lib/ServerError'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function AddProductPage({
  params,
}: {
  params: { clientId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
   if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const clientId = params.clientId[0]
  const client = await getClient(clientId)

  if (!client) {
    return <ServerError />
  }

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditClient client={client} />
    </main>
  )
}
