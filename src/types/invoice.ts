import { T_Client } from './client'

export interface T_InvoiceRow {
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
  invoiceId?: string
}

export interface T_InvoiceDetails {
  clientId: string
  totalPrice: number
  invoiceRows: T_InvoiceRow[]
}

export interface T_UpdateInvoiceDetails {
  invoiceId: string
  totalPrice: number
  invoiceRows: T_InvoiceRow[]
}

export interface T_Invoice {
  id: string
  invoiceNum: number
  clientId: string
  invoiceDate: string | Date
  totalAmount: number
  paid: boolean
  isActive: boolean
  Client: T_Client | null
  InvoiceRow: T_InvoiceRow[]
}
