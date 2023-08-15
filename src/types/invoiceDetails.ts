export interface T_InvoiceRow {
  id?: string
  name: string
  description: string
  buyPrice: number
  sellPrice: number
  VAT: number
  quantity: number
  totalPrice: number
  reduxId: string
}

export interface T_InvoiceDetails {
  clientId: string
  totalPrice: number
  invoiceRows: T_InvoiceRow[]
}
