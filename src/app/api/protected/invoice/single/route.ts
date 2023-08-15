import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/app/lib'
import { getServerSession } from 'next-auth'

export const GET = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const url = new URL(req.url)
  const invoiceId = url.searchParams.get('invoice_id')
  console.log('invoiceId', invoiceId)

  if (!invoiceId) {
    return NextResponse.json(
      {
        success: false,
        status: 400,
        errors: [
          { msg: 'Please provide a invoice_id in the url search params' },
        ],
      },
      {
        status: 400,
      }
    )
  }

  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
    include: {
      InvoiceRow: true,
    },
  })

  return NextResponse.json(invoice, { status: 200 })
}
