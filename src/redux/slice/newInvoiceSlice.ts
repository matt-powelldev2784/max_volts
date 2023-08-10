import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type T_NewInvoiceState = {
  currentInvoiceId: string
}

const initialState: T_NewInvoiceState = {
  currentInvoiceId: '',
}

export const newInvoiceSlice = createSlice({
  name: 'newInvoice',
  initialState,
  reducers: {
    setCurrentInvoiceId: (state, action: PayloadAction<string>) => {
      state.currentInvoiceId = action.payload
    },
  },
})

export const { setCurrentInvoiceId } = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
