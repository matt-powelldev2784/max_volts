export interface T_QuoteRow {
  id?: string
  productId: string
  name: string
  description: string
  buyPrice: number
  sellPrice: number
  VAT: number
  quantity: number
  totalPrice: number
  reduxId?: string
  quoteId?: string
}

export interface T_QuoteDetails {
  clientId: string
  totalPrice: number
  quoteRows: T_QuoteRow[]
}

export interface T_UpdateQuoteDetails {
  quoteId: string
  totalPrice: number
  quoteRows: T_QuoteRow[]
}

export interface T_Quote {
  id: string
  quoteNum: number
  clientId: string | Date
  quoteDate: Date
  totalAmount: number
  isActive: boolean
  Client: any
  QuoteRow: T_QuoteRow[]
}
