import { EditClient, NavBar } from '@/app/components'
import { getClient } from '../getClient'
import { ServerError } from '@/app/lib/ServerError'

export default async function AddProductPage({
  params,
}: {
  params: Promise<{ clientId: string[] }>
}) {
  const { clientId } = await params
  const id = clientId?.[0]
  const client = id ? await getClient(id) : null

  if (!client) return <ServerError />

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <EditClient client={client} />
    </main>
  )
}
