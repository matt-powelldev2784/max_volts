import { NextRequest, NextResponse } from 'next/server'
import { prisma, authOptions, noSessionResponse } from '@/lib'
import { getServerSession } from 'next-auth'

export const GET = async (_req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const clients = await prisma.client.findMany()
  return NextResponse.json(clients, { status: 200 })
}

export const POST = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const { name, add1, add2, postcode, tel } = await req.json()
  console.log(
    'name, add1, add2, postcode, tel',
    name,
    add1,
    add2,
    postcode,
    tel
  )

  return NextResponse.json({ test: 'test' }, { status: 201 })
}
