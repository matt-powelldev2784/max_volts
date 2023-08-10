import { configureStore } from '@reduxjs/toolkit'
import newInvoiceReducer from '../slice/newInvoiceSlice'

export const store = configureStore({
  reducer: {
    newInvoiceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
