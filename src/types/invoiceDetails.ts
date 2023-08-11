import { T_Product } from './product'

export interface T_InvoiceDetails {
  clientId: string
  totalPrice: number
  invoiceRows: T_Product[]
}
