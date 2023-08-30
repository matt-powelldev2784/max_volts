import { InvoiceListItem } from '../invoiceListItem/InvoiceListItem'

export const InvoiceListHeader = () => {
  const invoiceRowsHeader = {
    invoiceNum: 'Invoice Number',
    Client: { name: 'Client' },
    totalAmount: 'Total Amount',
    header: true,
  }

  const invoiceItemHeaderJsx = (
    // @ts-ignore: ignore erros to allow insertion of invoice row header
    <InvoiceListItem key={invoiceRowsHeader.id} {...invoiceRowsHeader} />
  )

  return <>{invoiceItemHeaderJsx}</>
}
