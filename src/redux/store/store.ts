import { configureStore } from '@reduxjs/toolkit'
import newInvoiceReducer from '../slice/newInvoiceSlice'
import clientReducer from '../slice/clientSlice'
import productReducer from '../slice/productSlice'

export const store = configureStore({
  reducer: {
    newInvoiceReducer,
    clientReducer,
    productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
