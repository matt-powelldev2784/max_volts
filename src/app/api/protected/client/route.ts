import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/lib'
import { getServerSession } from 'next-auth'
import { T_Client } from '../../../../types/client'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients = await prisma.client.findMany()
  return NextResponse.json(clients, { status: 200 })
}

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data: T_Client = await req.json()
  const { name, companyName } = data

  if (!name || !companyName) {
    return badRequestError400
  }

  const newClient = await prisma.client.create({
    data: {
      ...data,
    },
  })

  return NextResponse.json({ newClient }, { status: 201 })
}
