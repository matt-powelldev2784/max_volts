import { NextResponse } from 'next/server'
import { prisma } from '@/_index'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'
import { noSessionResponse } from '@/lib'

export const GET = async (_res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      companyName: true,
    },
  })
  return NextResponse.json(clients, { status: 200 })
}
