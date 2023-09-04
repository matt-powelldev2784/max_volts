import { InvoiceList, NavBar } from '@/app/components'
import { getTenInvoices } from '../getTenInvoices'
import { getMaxInvoicePages } from '../getMaxInvoicePages'
import { ServerError } from '@/app/lib/ServerError'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function InvoiceListPage({
  params,
}: {
  params: { pageNum: string }
}) {
  const session = await getServerSession(authOptions)
  if (!session) return redirect('/api/auth/signin')
   if (!session.user.isAdmin) return redirect('/pages/auth/not-authorised')

  const maxInvoicePages = await getMaxInvoicePages()
  const page = Number(params.pageNum[0])
  const invoices = await getTenInvoices(page)

  if (!invoices) {
    return <ServerError />
  }

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <InvoiceList
        invoices={invoices}
        maxInvoicePages={maxInvoicePages}
        currentPageNum={page}
        pageTitle="Invoice List"
      />
    </main>
  )
}
