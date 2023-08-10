'use client'

import { AddProduct } from './components/AddProduct'
import { InvoiceForm } from './components/InvoiceForm'

export const CreateInvoice = () => {
  return (
    <section className="w-full flexCol">
      <InvoiceForm />
      <AddProduct />
    </section>
  )
}
