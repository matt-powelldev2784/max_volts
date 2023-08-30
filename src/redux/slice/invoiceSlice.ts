import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import {
  T_InvoiceDetails,
  T_InvoiceRow,
  T_Product,
  T_UpdateInvoiceDetails,
} from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { apiCall } from '@/app/lib/apiCall'
import { T_Invoice } from '@/types/invoice'

type T_InvoiceState = {
  isLoading: boolean
  updateSuccess: string
  error: string | null
  invoiceRows: T_InvoiceRow[]
  totalPrice: number
  displayAddProductModal: boolean
  currentInvoiceRow: T_InvoiceRow | null
  invoices: T_Invoice[] | []
  currentEditInvoice: T_Invoice | null
  invoiceListPageNum: number
}

const initialState: T_InvoiceState = {
  isLoading: false,
  updateSuccess: '',
  error: null,
  invoiceRows: [],
  totalPrice: 0,
  displayAddProductModal: false,
  currentInvoiceRow: null,
  invoices: [],
  currentEditInvoice: null,
  invoiceListPageNum: 1,
}

export const createInvoice = createAsyncThunk(
  'invoice/createInvoice',
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

export const updateInvoice = createAsyncThunk(
  'invoice/updateInvoice',
  async (invoiceDetails: T_UpdateInvoiceDetails) => {
    try {
      const updatedInvoice = await apiCall({
        httpMethod: 'POST',
        route: '/api/protected/edit-invoice',
        body: invoiceDetails,
      })

      return updatedInvoice
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const getInvoices = createAsyncThunk(
  'invoice/getInvoices',
  async (page: string | number) => {
    let apiRoute = `/api/protected/invoice`
    if (page) apiRoute = `/api/protected/invoice?page=${page}`

    try {
      const invoices = await apiCall({
        httpMethod: 'GET',
        route: apiRoute,
      })

      return invoices
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const getInvoice = createAsyncThunk(
  'invoice/getInvoice',
  async (invoiceId: string) => {
    try {
      const invoice = await apiCall({
        httpMethod: 'GET',
        route: `/api/protected/invoice/single?invoice_id=${invoiceId}`,
      })

      return invoice
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const toggleInvoiceIsActive = createAsyncThunk(
  'invoice/toggleInvoiceIsActive',
  async (invoiceId: string) => {
    try {
      const invoice = await apiCall({
        httpMethod: 'POST',
        route: `/api/protected/invoice/toggle-close-invoice?invoice_id=${invoiceId}`,
      })

      return invoice
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    resetToInitialState: () => {
      return initialState
    },
    setErrorState: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    toggleAddProductModal: (state) => {
      state.displayAddProductModal = !state.displayAddProductModal
    },
    resetUpdateSuccessMessage: (state, action: PayloadAction<string>) => {
      state.updateSuccess = action.payload
    },
    setNextInvoicePageNum: (state) => {
      state.invoiceListPageNum = state.invoiceListPageNum + 1
    },
    setPrevInvoicePageNum: (state) => {
      if (state.invoiceListPageNum > 1)
        state.invoiceListPageNum = state.invoiceListPageNum - 1
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
          productId: action.payload.id,
        },
      ]

      const currentInvoiceRow = state.invoiceRows.find(
        (invoiceRow) => invoiceRow.reduxId === reduxId
      )

      if (currentInvoiceRow) {
        state.currentInvoiceRow = currentInvoiceRow
      }

      state.totalPrice = state.invoiceRows.reduce(
        (acc, curr) => acc + curr.totalPrice,
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
        (acc, curr) => acc + curr.totalPrice,
        0
      )
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(createInvoice.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createInvoice.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createInvoice.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(updateInvoice.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.updateSuccess = ''
      })
      .addCase(updateInvoice.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(updateInvoice.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(getInvoices.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        getInvoices.fulfilled,
        (state, action: PayloadAction<T_Invoice[]>) => {
          state.isLoading = false
          state.invoices = action.payload
        }
      )
      .addCase(getInvoices.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
        if (!state.error)
          state.invoiceListPageNum = state.invoiceListPageNum - 1
      })
      //---------------------------------------------------------------------
      .addCase(getInvoice.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.currentEditInvoice = null
        state.invoiceRows = []
      })
      .addCase(
        getInvoice.fulfilled,
        (state, action: PayloadAction<T_Invoice>) => {
          const invoiceRows = action.payload.InvoiceRow
          const invoiceRowsWithId = invoiceRows.map((invoiceRow) => {
            return { ...invoiceRow, reduxId: uuidv4() }
          })

          state.isLoading = false
          state.currentEditInvoice = action.payload
          state.invoiceRows = invoiceRowsWithId
          state.totalPrice = state.currentEditInvoice.totalAmount
        }
      )
      .addCase(getInvoice.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(toggleInvoiceIsActive.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.updateSuccess = ''
      })
      .addCase(
        toggleInvoiceIsActive.fulfilled,
        (state, action: PayloadAction<T_Invoice>) => {
          const invoiceRows = action.payload.InvoiceRow
          const invoiceRowsWithId = invoiceRows.map((invoiceRow) => {
            return { ...invoiceRow, reduxId: uuidv4() }
          })

          state.isLoading = false
          state.currentEditInvoice = action.payload
          state.invoiceRows = invoiceRowsWithId
          state.totalPrice = state.currentEditInvoice.totalAmount
        }
      )
      .addCase(
        toggleInvoiceIsActive.rejected,
        (state, { error }: AnyAction) => {
          state.isLoading = false
          state.error = error.message || 'Server Error. Please try again later'
        }
      )
    //---------------------------------------------------------------------
  },
})

export const {
  addProductToInvoice,
  updateInvoiceRow,
  setErrorState,
  toggleAddProductModal,
  resetUpdateSuccessMessage,
  deleteInvoiceRow,
  setCurrentInvoiceRow,
  setNextInvoicePageNum,
  setPrevInvoicePageNum,
  resetToInitialState,
} = invoiceSlice.actions
export default invoiceSlice.reducer
