import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/app/lib'
import { getServerSession } from 'next-auth'
import { T_Client } from '@/types'

export const PUT = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data: T_Client = await req.json()
  const { id } = data

  if (!id) {
    return badRequestError400
  }

  const updatedClient = await prisma.client.update({
    where: { id: data.id },
    data: {
      isHidden: true,
    },
  })

  return NextResponse.json({ updatedClient }, { status: 200 })
}
