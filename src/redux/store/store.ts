import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from '../slice/invoiceSlice'
import clientReducer from '../slice/clientSlice'
import productReducer from '../slice/productSlice'
import quoteReducer from '../slice/quoteSlice'

export const store = configureStore({
  reducer: {
    invoiceReducer,
    clientReducer,
    productReducer,
    quoteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
