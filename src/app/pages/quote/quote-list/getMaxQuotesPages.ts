import { prisma } from '@/app/lib'

export const getMaxQuotePages = async () => {
  const pageSize = 10

  const totalProducts = await prisma.quote.count()

  const maxPage = Math.ceil(totalProducts / pageSize)

  return maxPage
}
