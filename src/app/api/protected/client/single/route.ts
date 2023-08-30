import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/app/lib'
import { getServerSession } from 'next-auth'
import { T_Client } from '../../../../types/client'

export const PUT = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const data: T_Client = await req.json()
  const { id, name } = data

  if (!id || !name) {
    return badRequestError400
  }

  const updatedClient = await prisma.product.update({
    where: { id: data.id },
    data: {
      ...data,
    },
  })

  return NextResponse.json({ updatedClient }, { status: 200 })
}
