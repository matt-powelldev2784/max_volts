import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { T_Product } from '@/types'
import { v4 as uuidv4 } from 'uuid'

interface T_ProductWithId extends T_Product {
  reduxId: string
}

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
  },
})

export const { addProductToInvoice } = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
