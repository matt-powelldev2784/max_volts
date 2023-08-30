import { prisma } from '@/app/lib'

export const getTenInvoices = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const invoices = await prisma.invoice.findMany({
    include: {
      Client: true,
      InvoiceRow: true,
    },
    orderBy: { invoiceNum: 'desc' },
    skip,
    take: pageSize,
  })

  return invoices
}
