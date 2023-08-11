import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'
import { badRequestError400 } from '@/lib'
import { T_Product } from '@/types'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data = await req.json()
  const { clientId, totalPrice, invoiceRows } = data

  if (!clientId || !totalPrice || invoiceRows.length === 0)
    return badRequestError400

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId: data.clientId,
      totalAmount: data.totalPrice,
    },
  })

  await prisma.invoiceRow.createMany({
    data: invoiceRows.map((invoiceRow: T_Product) => ({
      invoiceId: newInvoice.id,
      productId: invoiceRow.id,
      name: invoiceRow.name,
      description: invoiceRow.description,
      price: invoiceRow.sellPrice,
    })),
  })

  const activeInvoice = await prisma.invoice.update({
    where: { id: newInvoice.id },
    data: {
      isActive: true,
    },
  })

  return NextResponse.json({ activeInvoice }, { status: 201 })
}
