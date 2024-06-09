import { QuoteListItem } from '../quoteListItem/QuoteListItem'

export const QuoteListHeader = () => {
  const quoteRowsHeader = {
    quoteNum: 'Quote Number',
    Client: { name: 'Client' },
    totalAmount: 'Total Amount',
    header: true,
  }

  const quoteItemHeaderJsx = (
    // @ts-ignore: ignore errors to allow insertion of quote row header
    <QuoteListItem key={quoteRowsHeader.id} {...quoteRowsHeader} />
  )

  return <>{quoteItemHeaderJsx}</>
}
