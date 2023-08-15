import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Product } from '@/types'
import { apiCall } from '@/app/lib/apiCall'

type T_ProductState = {
  isLoading: boolean
  error: string
  products: T_Product[]
  currentProduct: T_Product | null
}

const initialState: T_ProductState = {
  isLoading: false,
  error: '',
  products: [],
  currentProduct: null,
}

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
    const productsData: T_Product[] = await apiCall({
      route: `/api/protected/product`,
    })

    return productsData
  } catch (err: any) {
    throw Error(err)
  }
})

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (product: T_Product) => {
    try {
      const productData = await apiCall({
        httpMethod: 'POST',
        route: `/api/protected/product`,
        body: product,
      })

      return productData
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    dummyReducer: (state, action: PayloadAction<T_Product[]>) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || ''
      })
      //---------------------------------------------------------------------
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentProduct = payload.newProduct
      })
      .addCase(addProduct.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || ''
      })
  },
})

export const { dummyReducer } = productSlice.actions
export default productSlice.reducer
