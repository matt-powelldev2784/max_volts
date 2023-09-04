import { EditInvoice, NavBar } from '@/app/components'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function EditInvoicePage({
  params,
}: {
  params: { invoiceId: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
   if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const invoiceId = params.invoiceId[0]

  return (
    <div>
      <NavBar />
      <EditInvoice invoiceId={invoiceId} />
    </div>
  )
}
