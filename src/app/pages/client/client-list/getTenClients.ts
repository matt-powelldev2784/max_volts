import { prisma } from '@/app/lib'
export const getTenClients = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const clients = await prisma.client.findMany({
    orderBy: { name: 'asc' },
    skip,
    take: pageSize,
  })

  return clients
}
