import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import {
  T_QuoteDetails,
  T_QuoteRow,
  T_Product,
  T_UpdateQuoteDetails,
} from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { apiCall } from '@/app/lib/apiCall'
import { T_Quote } from '@/types/quote'

type T_QuoteState = {
  isLoading: boolean
  updateSuccess: string
  error: string | null
  quoteRows: T_QuoteRow[]
  totalPrice: number
  displayAddProductModal: boolean
  currentQuoteRow: T_QuoteRow | null
  quotes: T_Quote[] | []
  currentEditQuote: T_Quote | null
}

const initialState: T_QuoteState = {
  isLoading: false,
  updateSuccess: '',
  error: null,
  quoteRows: [],
  totalPrice: 0,
  displayAddProductModal: false,
  currentQuoteRow: null,
  quotes: [],
  currentEditQuote: null,
}

export const createQuote = createAsyncThunk(
  'quote/createQuote',
  async (quoteDetails: T_QuoteDetails) => {
    try {
      console.log('quoteDetails', quoteDetails)
      const newQuote = await apiCall({
        httpMethod: 'POST',
        route: '/api/protected/create-quote',
        body: quoteDetails,
      })

      return newQuote
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const updateQuote = createAsyncThunk(
  'quote/updateQuote',
  async (quoteDetails: T_UpdateQuoteDetails) => {
    try {
      const updatedQuote = await apiCall({
        httpMethod: 'POST',
        route: '/api/protected/edit-quote',
        body: quoteDetails,
      })

      return updatedQuote
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const getQuotes = createAsyncThunk(
  'quote/getQuotes',
  async (page: string | number) => {
    let apiRoute = `/api/protected/quote`
    if (page) apiRoute = `/api/protected/quote?page=${page}`

    try {
      const quotes = await apiCall({
        httpMethod: 'GET',
        route: apiRoute,
      })

      return quotes
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const getQuote = createAsyncThunk(
  'quote/getQuote',
  async (quoteId: string) => {
    try {
      const quote = await apiCall({
        httpMethod: 'GET',
        route: `/api/protected/quote/single?quote_id=${quoteId}`,
      })

      return quote
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const toggleQuoteIsActive = createAsyncThunk(
  'quote/toggleQuoteIsActive',
  async (quoteId: string) => {
    try {
      const quote = await apiCall({
        httpMethod: 'POST',
        route: `/api/protected/quote/toggle-quote-is-active?quote_id=${quoteId}`,
      })

      return quote
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const quoteSlice = createSlice({
  name: 'quote',
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
    deleteQuoteRow: (state) => {
      state.quoteRows = state.quoteRows.filter((quoteRow) => {
        return quoteRow.reduxId !== state.currentQuoteRow?.reduxId
      })

      state.totalPrice = state.quoteRows.reduce(
        (acc, curr) => acc + curr.sellPrice,
        0
      )
    },
    setCurrentQuoteRow: (state, action: PayloadAction<T_QuoteRow>) => {
      state.currentQuoteRow = action.payload
    },
    addProductToQuote: (state, action: PayloadAction<T_Product>) => {
      const reduxId = uuidv4()
      const quantity = 1
      const totalPrice =
        quantity * action.payload.sellPrice +
        quantity * action.payload.sellPrice * (action.payload.VAT / 100)

      state.quoteRows = [
        ...state.quoteRows,
        {
          ...action.payload,
          reduxId,
          quantity,
          totalPrice,
          productId: action.payload.id,
        },
      ]

      const currentQuoteRow = state.quoteRows.find(
        (quoteRow) => quoteRow.reduxId === reduxId
      )

      if (currentQuoteRow) {
        state.currentQuoteRow = currentQuoteRow
      }

      state.totalPrice = state.quoteRows.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0
      )
    },
    updateQuoteRow: (state, action: PayloadAction<T_QuoteRow>) => {
      const { reduxId, quantity, name, description, buyPrice, VAT, sellPrice } =
        action.payload

      const index = state.quoteRows.findIndex(
        (quoteRow) => quoteRow.reduxId === reduxId
      )

      if (index !== -1) {
        state.quoteRows[index].quantity = Number(quantity)
        state.quoteRows[index].name = name
        state.quoteRows[index].description = description
        state.quoteRows[index].buyPrice = buyPrice
        state.quoteRows[index].VAT = VAT
        state.quoteRows[index].sellPrice = sellPrice
        state.quoteRows[index].totalPrice =
          quantity * action.payload.sellPrice +
          quantity * action.payload.sellPrice * (action.payload.VAT / 100)
      }

      state.totalPrice = state.quoteRows.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createQuote.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createQuote.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createQuote.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      .addCase(updateQuote.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.updateSuccess = ''
      })
      .addCase(updateQuote.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(updateQuote.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      .addCase(getQuotes.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        getQuotes.fulfilled,
        (state, action: PayloadAction<T_Quote[]>) => {
          state.isLoading = false
          state.quotes = action.payload
        }
      )
      .addCase(getQuotes.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      .addCase(getQuote.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.currentEditQuote = null
        state.quoteRows = []
      })
      .addCase(getQuote.fulfilled, (state, action: PayloadAction<T_Quote>) => {
        const quoteRows = action.payload.QuoteRow
        const quoteRowsWithId = quoteRows.map((quoteRow) => {
          return { ...quoteRow, reduxId: uuidv4() }
        })

        state.isLoading = false
        state.currentEditQuote = action.payload
        state.quoteRows = quoteRowsWithId
        state.totalPrice = state.currentEditQuote.totalAmount
      })
      .addCase(getQuote.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
      .addCase(toggleQuoteIsActive.pending, (state) => {
        state.isLoading = true
        state.error = null
        state.updateSuccess = ''
      })
      .addCase(
        toggleQuoteIsActive.fulfilled,
        (state, action: PayloadAction<T_Quote>) => {
          const quoteRows = action.payload.QuoteRow
          const quoteRowsWithId = quoteRows.map((quoteRow) => {
            return { ...quoteRow, reduxId: uuidv4() }
          })

          state.isLoading = false
          state.currentEditQuote = action.payload
          state.quoteRows = quoteRowsWithId
          state.totalPrice = state.currentEditQuote.totalAmount
        }
      )
      .addCase(toggleQuoteIsActive.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || 'Server Error. Please try again later'
      })
  },
})

export const {
  addProductToQuote,
  updateQuoteRow,
  setErrorState,
  toggleAddProductModal,
  resetUpdateSuccessMessage,
  deleteQuoteRow,
  setCurrentQuoteRow,
  resetToInitialState,
} = quoteSlice.actions
export default quoteSlice.reducer
