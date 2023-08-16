import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/app/lib'
import { getServerSession } from 'next-auth'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const invoices = await prisma.invoice.findMany({
    orderBy: { invoiceNum: 'asc' },
  })
  return NextResponse.json(invoices, { status: 200 })
}
