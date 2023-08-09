import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data = await req.json()
  const clientId = data.clientId
  const totalAmount = Number(data.totalAmount)

  if (!clientId || !totalAmount || typeof totalAmount !== 'number') {
    return NextResponse.json(
      {
        success: false,
        status: 400,
        errors: [
          { msg: 'Please provide all required fields in the correct format' },
        ],
      },
      {
        status: 400,
      }
    )
  }

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId,
      totalAmount,
    },
  })

  return NextResponse.json(newInvoice, { status: 201 })
}
