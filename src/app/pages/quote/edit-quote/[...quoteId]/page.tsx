import { EditQuote, NavBar } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function EditQuotePage({
  params,
}: {
  params: { quoteId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
  if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const quoteId = params.quoteId[0]
  console.log('quoteId', quoteId)

  return (
    <div>
      <NavBar />
      <EditQuote quoteId={quoteId} />
    </div>
  )
}
