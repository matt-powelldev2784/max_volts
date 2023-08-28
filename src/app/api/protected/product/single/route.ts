import { NextRequest, NextResponse } from 'next/server'
import {
  prisma,
  authOptions,
  noSessionResponse,
  badRequestError400,
} from '@/app/lib'
import { getServerSession } from 'next-auth'

export const GET = async (req: NextRequest, _res: NextResponse) => {
  const session = await getServerSession(authOptions)
  if (!session) return noSessionResponse

  const url = new URL(req.url)
  const productId = url.searchParams.get('product_id')

  if (!productId) {
    return badRequestError400
  }

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  })

  return NextResponse.json(product, { status: 200 })
}
