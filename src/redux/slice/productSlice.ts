import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Product, T_ProductWithoutId } from '@/types'
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
  async (product: T_ProductWithoutId) => {
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

export const getProduct = createAsyncThunk(
  'product/getProduct',
  async (productId: string) => {
    try {
      const product = await apiCall({
        httpMethod: 'GET',
        route: `/api/protected/product/single?product_id=${productId}`,
      })

      return product
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (product: T_Product) => {
    try {
      const updatedProduct = await apiCall({
        httpMethod: 'PUT',
        route: `/api/protected/product/single}`,
        body: product,
      })

      return updatedProduct
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
        error.message || 'Server Error. Please try again later'
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
        error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true
        state.products = []
        state.currentProduct = null
        state.error = ''
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentProduct = payload
      })
      .addCase(getProduct.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true
        state.currentProduct = null
        state.error = ''
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentProduct = payload
      })
      .addCase(updateProduct.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        error.message || 'Server Error. Please try again later'
      })
  },
})

export const { dummyReducer } = productSlice.actions
export default productSlice.reducer
