import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { T_Product, T_ProductWithId } from '@/types'
import { v4 as uuidv4 } from 'uuid'

type T_NewInvoiceState = {
  invoiceRows: T_ProductWithId[]
  totalPrice: number
}

const initialState: T_NewInvoiceState = {
  invoiceRows: [],
  totalPrice: 0,
}

export const newInvoiceSlice = createSlice({
  name: 'newInvoice',
  initialState,
  reducers: {
    addProductToInvoice: (state, action: PayloadAction<T_Product>) => {
      state.invoiceRows = [
        ...state.invoiceRows,
        {
          ...action.payload,
          reduxId: uuidv4(),
        },
      ]

      state.totalPrice = state.invoiceRows.reduce(
        (acc, curr) => acc + curr.sellPrice,
        0
      )
    },
    updateInvoiceRow: (state, action: PayloadAction<any>) => {
      const { reduxId, name, description, price } = action.payload

      const index = state.invoiceRows.findIndex(
        (invoiceRow) => invoiceRow.reduxId === reduxId
      )

      if (index !== -1) {
        state.invoiceRows[index].name = name
        state.invoiceRows[index].description = description
        state.invoiceRows[index].sellPrice = Number(price)
      }

      state.totalPrice = state.invoiceRows.reduce(
        (acc, curr) => acc + curr.sellPrice,
        0
      )
    },
  },
})

export const { addProductToInvoice, updateInvoiceRow } = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
