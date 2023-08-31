import { prisma } from '@/app/lib'

export const getTenActiveInvoices = async (pageNumber: number) => {
  const pageSize = 10
  const skip = (pageNumber - 1) * pageSize

  const invoices = await prisma.invoice.findMany({
    where: { isActive: true },
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
