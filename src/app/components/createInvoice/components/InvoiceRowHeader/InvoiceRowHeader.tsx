import { InvoiceRowText } from '../InvoiceRowText/InvoiceRowText'

export const InvoiceRowHeader = () => {
  const invoiceRowsHeader = {
    id: 'invoice_row_header',
    name: 'Product Name',
    buyPrice: 'Buy Price',
    description: 'Description',
    sellPrice: 'Price',
    header: true,
  }

  const invoiceRowHeaderJsx = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <InvoiceRowText key={invoiceRowsHeader.id} {...invoiceRowsHeader} />
  )

  return <>{invoiceRowHeaderJsx}</>
}
