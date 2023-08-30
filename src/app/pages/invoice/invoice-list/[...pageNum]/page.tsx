import { InvoiceList, NavBar } from '@/app/components'
import { getTenInvoices } from '../getTenInvoices'
import { getMaxInvoicePages } from '../getMaxInvoicePages'

export default async function InvoiceListPage({
  params,
}: {
  params: { pageNum: string }
}) {
  const maxInvoicePages = await getMaxInvoicePages()
  const page = Number(params.pageNum[0])
  const invoices = await getTenInvoices(page)

  console.log('invoices', invoices)

  return (
    <main className="min-h-screen min-w-screen">
      <NavBar />
      <InvoiceList />
    </main>
  )
}
