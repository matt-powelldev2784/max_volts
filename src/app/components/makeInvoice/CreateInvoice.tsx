'use client'

import { AddProduct } from './components/AddProduct'
import { InvoiceForm } from './components/InvoiceForm'

export const CreateInvoice = () => {
  return (
    <section className="flexCol">
      <InvoiceForm />
      <AddProduct />
    </section>
  )
}
