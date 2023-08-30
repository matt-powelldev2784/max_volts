import { prisma } from '@/app/lib'

export const getTenInvoices = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const invoices = await prisma.invoice.findMany({
    orderBy: { invoiceNum: 'asc' },
    skip,
    take: pageSize,
  })

  return invoices
}
