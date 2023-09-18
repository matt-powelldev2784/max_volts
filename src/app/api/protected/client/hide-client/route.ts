import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/app/lib'
import { getServerSession } from 'next-auth'

export const PUT = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const url = new URL(req.url)
  const id = url.searchParams.get('client_id')

  if (!id) {
    return badRequestError400
  }

  const updatedClient = await prisma.client.update({
    where: { id },
    data: {
      isHidden: true,
    },
  })

  return NextResponse.json({ updatedClient }, { status: 200 })
}
