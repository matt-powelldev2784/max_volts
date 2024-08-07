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
  const quoteId = url.searchParams.get('quote_id')
  console.log('quoteId', quoteId)

  if (!quoteId) {
    return badRequestError400
  }

  const quote = await prisma.quote.findUnique({
    where: {
      id: quoteId,
    },
    include: {
      Client: true,
      QuoteRow: true,
    },
  })

  return NextResponse.json(quote, { status: 200 })
}
