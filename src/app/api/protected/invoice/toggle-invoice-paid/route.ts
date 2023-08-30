import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/app/lib'
import { getServerSession } from 'next-auth'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const url = new URL(req.url)
  const invoiceId = url.searchParams.get('invoice_id')

  if (!invoiceId) {
    return badRequestError400
  }

  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
  })

  const isPaid = invoice?.paid

  const updatedInvoice = await prisma.invoice.update({
    where: {
      id: invoiceId,
    },
    data: {
      paid: !isPaid,
    },
    include: {
      Client: true,
      InvoiceRow: true,
    },
  })

  return NextResponse.json(updatedInvoice, { status: 200 })
}
