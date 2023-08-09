import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data = await req.json()
  const { invoiceId, name, description } = data
  const price = data.sellPrice
  const productId = data.id

  const newInvoiceRow = await prisma.invoiceRow.create({
    data: {
      invoiceId,
      productId,
      name,
      description,
      price,
    },
  })

  return NextResponse.json(newInvoiceRow, { status: 201 })
}
