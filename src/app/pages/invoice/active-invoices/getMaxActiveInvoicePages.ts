import { prisma } from '@/app/lib'

export const getMaxActiveInvoicePages = async () => {
  const pageSize = 10

  const totalProducts = await prisma.invoice.count({
    where: { paid: false },
  })

  const maxPage = Math.ceil(totalProducts / pageSize)

  return maxPage
}
