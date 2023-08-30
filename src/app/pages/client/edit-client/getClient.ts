import { prisma } from '@/app/lib'

export const getClient = async (clientId: string) => {
  const client = await prisma.client.findUnique({
    where: {
      id: clientId,
    },
  })

  return client
}
