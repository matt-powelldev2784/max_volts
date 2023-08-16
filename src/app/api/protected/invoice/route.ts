import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/app/lib'
import { getServerSession } from 'next-auth'

export const GET = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const url = new URL(req.url)
  const pageNumber = url.searchParams.get('page')
  const page = Number(pageNumber) || 1

  const pageSize = 10
  const skip = (page - 1) * pageSize

  const invoices = await prisma.invoice.findMany({
    include: {
      Client: true,
      InvoiceRow: true,
    },
    orderBy: { invoiceNum: 'desc' },
    skip,
    take: pageSize,
  })

  return NextResponse.json(invoices, { status: 200 })
}
