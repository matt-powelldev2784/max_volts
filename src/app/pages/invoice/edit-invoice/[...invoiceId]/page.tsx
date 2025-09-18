import { EditInvoice, NavBar } from '@/app/components'

export default async function EditInvoicePage({
  params,
}: {
  params: Promise<{ invoiceId: string[] }>
}) {
  const { invoiceId } = await params
  const id = invoiceId?.[0]

  if (!id) return null

  return (
    <div>
      <NavBar />
      <EditInvoice invoiceId={id} />
    </div>
  )
}
