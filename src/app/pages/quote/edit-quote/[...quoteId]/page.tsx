import { EditQuote, NavBar } from '@/app/components'

export default async function EditQuotePage({
  params,
}: {
  params: Promise<{ quoteId: string[] }>
}) {
  const { quoteId } = await params
  const id = quoteId?.[0]
  if (!id) return null

  return (
    <div>
      <NavBar />
      <EditQuote quoteId={id} />
    </div>
  )
}
