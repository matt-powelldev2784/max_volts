import { CreateInvoice } from './components/CreateInvoice'
import { AddInvoiceRow } from './components/AddInvoiceRow'
import { ViewInvoice } from './components/ViewInvoice'

export const Invoice = () => {
  return (
    <section>
      <CreateInvoice />
      <AddInvoiceRow />
      <ViewInvoice />
    </section>
  )
}
