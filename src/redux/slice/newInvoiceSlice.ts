import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Product, T_ProductWithId, T_InvoiceDetails } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { apiCall } from '@/lib/apiCall'

type T_NewInvoiceState = {
  isLoading: boolean
  error: string | null
  invoiceRows: T_ProductWithId[]
  totalPrice: number
}

const initialState: T_NewInvoiceState = {
  isLoading: false,
  error: null,
  invoiceRows: [],
  totalPrice: 0,
}

export const createInvoice = createAsyncThunk(
  'newInvoice/createInvoice',
  async (invoiceDetails: T_InvoiceDetails) => {
    try {
      const newInvoice = await apiCall({
        httpMethod: 'POST',
        route: '/api/protected/create-invoice',
        body: invoiceDetails,
      })

      return newInvoice
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const newInvoiceSlice = createSlice({
  name: 'newInvoice',
  initialState,
  reducers: {
    setErrorState: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
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
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(createInvoice.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createInvoice.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createInvoice.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error when creating invoice'
      })
  },
})

export const { addProductToInvoice, updateInvoiceRow, setErrorState } =
  newInvoiceSlice.actions
export default newInvoiceSlice.reducer
