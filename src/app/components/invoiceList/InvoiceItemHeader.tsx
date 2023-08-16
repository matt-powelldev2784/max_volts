import { InvoiceItem } from './InvoiceItem'

export const InvoiceItemHeader = () => {
  const invoiceRowsHeader = {
    invoiceNum: 'Invoice Number',
    Client: { name: 'Client' },
    totalAmount: 'Total Amount',
    header: true,
  }

  const invoiceItemHeaderJsx = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <InvoiceItem key={invoiceRowsHeader.id} {...invoiceRowsHeader} />
  )

  return <>{invoiceItemHeaderJsx}</>
}
