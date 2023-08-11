import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'
import { badRequestError400 } from '../../badRequestError'

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

  

  return NextResponse.json({ test: 'create ivnoice' }, { status: 201 })
}
