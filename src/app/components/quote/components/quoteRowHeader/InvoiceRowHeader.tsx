import { QuoteRowText } from '../quoteRowText/QuoteRowText'

export const QuoteRowHeader = () => {
  const quoteRowsHeader = {
    id: 'quote_row_header',
    name: 'Product Name',
    buyPrice: 'Buy Price',
    description: 'Description',
    sellPrice: 'Price',
    header: true,
  }

  const quoteRowHeaderJsx = (
    // @ts-ignore: ignore errors to allow insertion of quote row header
    <QuoteRowText key={quoteRowsHeader.id} {...quoteRowsHeader} />
  )

  return <>{quoteRowHeaderJsx}</>
}
