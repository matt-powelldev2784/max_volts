import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { T_Product, T_ProductWithId } from '@/types'
import { v4 as uuidv4 } from 'uuid'

type T_NewInvoiceState = {
  invoiceRows: T_ProductWithId[]
}

const initialState: T_NewInvoiceState = {
  invoiceRows: [],
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
    },
  },
})

export const { addProductToInvoice, updateInvoiceRow } = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
