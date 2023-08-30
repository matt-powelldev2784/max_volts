import { prisma } from '@/app/lib'

export const getMaxInvoicePages = async () => {
  const pageSize = 10

  const totalProducts = await prisma.invoice.count()

  const maxPage = Math.ceil(totalProducts / pageSize)

  return maxPage
}
