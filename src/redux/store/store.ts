import { configureStore } from '@reduxjs/toolkit'
import newInvoiceReducer from '../slice/newInvoiceSlice'
import clientReducer from '../slice/clientSlice'

export const store = configureStore({
  reducer: {
    newInvoiceReducer,
    clientReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
