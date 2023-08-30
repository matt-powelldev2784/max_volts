import { EditClient, NavBar } from '@/app/components'
import { getClient } from '../getClient'
import { ServerError } from '@/app/lib/ServerError'
import { T_Client } from '@/types'

export default async function AddProductPage({
  params,
}: {
  params: { clientId: string }
}) {
  const clientId = params.clientId[0]
  const client = await getClient(clientId)

  if (!client) {
    return <ServerError />
  }

  console.log('client', client)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditClient client={client} />
    </main>
  )
}
