import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Product, T_InvoiceDetails, T_InvoiceRow } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { apiCall } from '@/lib/apiCall'

type T_NewInvoiceState = {
  isLoading: boolean
  error: string | null
  invoiceRows: T_InvoiceRow[]
  totalPrice: number
  displayAddProductModal: boolean
  currentInvoiceRow: T_InvoiceRow | null
}

const initialState: T_NewInvoiceState = {
  isLoading: false,
  error: null,
  invoiceRows: [],
  totalPrice: 0,
  displayAddProductModal: false,
  currentInvoiceRow: null,
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
    toggleAddProductModal: (state) => {
      state.displayAddProductModal = !state.displayAddProductModal
    },
    deleteInvoiceRow: (state) => {
      state.invoiceRows = state.invoiceRows.filter((invoiceRow) => {
        return invoiceRow.reduxId !== state.currentInvoiceRow?.reduxId
      })

      state.totalPrice = state.invoiceRows.reduce(
        (acc, curr) => acc + curr.sellPrice,
        0
      )
    },
    setCurrentInvoiceRow: (state, action: PayloadAction<T_InvoiceRow>) => {
      state.currentInvoiceRow = action.payload
    },
    addProductToInvoice: (state, action: PayloadAction<T_Product>) => {
      const reduxId = uuidv4()
      const quantity = 1
      const totalPrice =
        quantity * action.payload.sellPrice +
        quantity * action.payload.sellPrice * (action.payload.VAT / 100)

      state.invoiceRows = [
        ...state.invoiceRows,
        {
          ...action.payload,
          reduxId,
          quantity,
          totalPrice,
        },
      ]

      const currentInvoiceRow = state.invoiceRows.find(
        (invoiceRow) => invoiceRow.reduxId === reduxId
      )

      if (currentInvoiceRow) {
        state.currentInvoiceRow = currentInvoiceRow
      }

      state.totalPrice = state.invoiceRows.reduce(
        (acc, curr) => acc + curr.sellPrice,
        0
      )
    },
    updateInvoiceRow: (state, action: PayloadAction<T_InvoiceRow>) => {
      const { reduxId, quantity, name, description, buyPrice, VAT, sellPrice } =
        action.payload

      const index = state.invoiceRows.findIndex(
        (invoiceRow) => invoiceRow.reduxId === reduxId
      )

      if (index !== -1) {
        state.invoiceRows[index].quantity = Number(quantity)
        state.invoiceRows[index].name = name
        state.invoiceRows[index].description = description
        state.invoiceRows[index].buyPrice = buyPrice
        state.invoiceRows[index].VAT = VAT
        state.invoiceRows[index].sellPrice = sellPrice
        state.invoiceRows[index].totalPrice =
          quantity * action.payload.sellPrice +
          quantity * action.payload.sellPrice * (action.payload.VAT / 100)
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

export const {
  addProductToInvoice,
  updateInvoiceRow,
  setErrorState,
  toggleAddProductModal,
  deleteInvoiceRow,
  setCurrentInvoiceRow,
} = newInvoiceSlice.actions
export default newInvoiceSlice.reducer
