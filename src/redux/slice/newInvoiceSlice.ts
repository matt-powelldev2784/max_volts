import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { T_Product } from '@/types'

type T_NewInvoiceState = {
  products: T_Product[]
}

const initialState: T_NewInvoiceState = {
  products: [],
}

export const newInvoiceSlice = createSlice({
  name: 'newInvoice',
  initialState,
  reducers: {
    addProductToInvoice: (state, action: PayloadAction<T_Product>) => {
      state.products = [...state.products, action.payload]
    },
  },
})

export const { addProductToInvoice } = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
