'use client'

interface InvoiceRowProps {
  description: string
  name: string
  price: string
}

export const InvoiceRow = ({ description, name, price }: InvoiceRowProps) => {
  return (
    <section>
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
    </section>
  )
}
