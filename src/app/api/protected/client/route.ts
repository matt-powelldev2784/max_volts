import { NextResponse } from 'next/server'
import { prisma } from '../../../../../prisma/db/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { noSessionResponse } from '@/lib'

export const GET = async (_res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients = await prisma.client.findMany()
  return NextResponse.json(clients, { status: 200 })
}
