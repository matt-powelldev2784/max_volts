import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'
import type { ClientName } from '@/types/clientName'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients: ClientName[] = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      companyName: true,
    },
  })
  return NextResponse.json(clients, { status: 200 })
}
