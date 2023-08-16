import { T_Client } from './client'

export interface T_InvoiceRow {
  id: string
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

export interface T_Invoice {
  id: string
  invoiceNum: number
  clientId: string
  totalAmount: number
  isActive: boolean
  Client: T_Client
  InvoiceRows: T_InvoiceRow[]
}
