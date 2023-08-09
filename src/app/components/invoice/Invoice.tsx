import { CreateInvoice } from './components/CreateInvoice'
import { AddInvoiceRow } from './components/AddInvoiceRow'

export const Invoice = () => {
  return (
    <section>
      <CreateInvoice />
      <AddInvoiceRow />
    </section>
  )
}
