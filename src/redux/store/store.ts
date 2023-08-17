import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from '../slice/invoiceSlice'
import clientReducer from '../slice/clientSlice'
import productReducer from '../slice/productSlice'

export const store = configureStore({
  reducer: {
    invoiceReducer,
    clientReducer,
    productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
