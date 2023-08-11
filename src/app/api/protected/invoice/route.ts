import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'
import { badRequestError400 } from '@/lib'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data = await req.json()
  const clientId = data.clientId
  const totalAmount = Number(data.totalAmount)

  if (!clientId || !totalAmount || typeof totalAmount !== 'number')
    return badRequestError400

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId,
      totalAmount,
    },
  })

  return NextResponse.json(newInvoice, { status: 201 })
}
