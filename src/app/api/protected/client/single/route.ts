import { NextRequest, NextResponse } from 'next/server'
import { prisma, badRequestError400 } from '@/app/lib'
import { T_Client } from '@/types'

export const PUT = async (req: NextRequest) => {
  try {
    const data: T_Client = await req.json()
    const { id, name } = data
    if (!id || !name) return badRequestError400

    const updatedClient = await prisma.client.update({
      where: { id },
      data: { ...data },
    })

    return NextResponse.json({ updatedClient }, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to update client' },
      { status: 500 }
    )
  }
}
