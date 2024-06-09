import { prisma } from '@/app/lib'

export const getTenQuotes = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const quotes = await prisma.quote.findMany({
    include: {
      Client: true,
      QuoteRow: true,
    },
    orderBy: { quoteNum: 'desc' },
    skip,
    take: pageSize,
  })

  return quotes
}
