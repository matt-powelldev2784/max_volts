import { InvoiceList, NavBar } from '@/app/components'
import { getTenActiveInvoices } from '../getTenActiveInvoices'
import { getMaxActiveInvoicePages } from '../getMaxActiveInvoicePages'
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

  const maxInvoicePages = await getMaxActiveInvoicePages()
  const page = Number(params.pageNum[0])
  const invoices = await getTenActiveInvoices(page)

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
        pageTitle="Open Invoices"
      />
    </main>
  )
}
