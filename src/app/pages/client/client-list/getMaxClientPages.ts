import { prisma } from '@/app/lib'

export const getMaxClienttPages = async () => {
  const pageSize = 10

  const totalClients = await prisma.client.count()

  const maxPage = Math.ceil(totalClients / pageSize)

  return maxPage
}
