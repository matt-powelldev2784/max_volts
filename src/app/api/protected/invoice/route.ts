import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const { clientId, totalAmount } = await req.json()
  console.log('clientId', clientId)
  console.log('totalAmount', totalAmount)

  return NextResponse.json({ clientId, totalAmount }, { status: 201 })

  // const newInvoice = await prisma.invoice.create({
  //   data: {
  //     clientId,
  //     totalAmount,
  //   },
  // })

  // return NextResponse.json(newInvoice, { status: 201 })
}
