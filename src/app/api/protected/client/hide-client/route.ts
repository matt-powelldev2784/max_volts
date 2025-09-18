import { NextRequest, NextResponse } from 'next/server'
import { prisma, badRequestError400 } from '@/app/lib'

export const PUT = async (req: NextRequest) => {
  const id = req.nextUrl.searchParams.get('client_id')
  if (!id) return badRequestError400

  const updatedClient = await prisma.client.update({
    where: { id },
    data: { isHidden: true },
  })

  return NextResponse.json({ updatedClient }, { status: 200 })
}
