import { prisma } from '../../../../prisma/db/client'

const getClients = async () => {
  return await prisma.client.findMany()
}

export const Invoice = async () => {
  const clients = await getClients()
  console.log('clients', clients)

  return <div>Invoice</div>
}
