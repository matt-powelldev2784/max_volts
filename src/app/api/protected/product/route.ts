import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/app/lib'
import { getServerSession } from 'next-auth'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const products = await prisma.product.findMany({ orderBy: { name: 'asc' } })
  return NextResponse.json(products, { status: 200 })
}
