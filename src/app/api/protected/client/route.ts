import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/_index/index'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { noSessionResponse } from '@/lib'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients = await prisma.client.findMany()
  return NextResponse.json(clients, { status: 200 })
}
