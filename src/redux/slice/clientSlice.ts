import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Client } from '@/types'
import { apiCall } from '@/lib/apiCall'

type T_ClienteState = {
  isLoading: boolean
  error: string
  clients: T_Client[]
}

const initialState: T_ClienteState = {
  isLoading: false,
  error: '',
  clients: [],
}

export const getClients = createAsyncThunk('client/getClient', async () => {
  try {
    const clientsData: T_Client[] = await apiCall({
      route: `/api/protected/client`,
    })

    console.log('clientsData', clientsData)
    return clientsData
  } catch (err: any) {
    throw Error(err)
  }
})

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    dummyReducer: (state, action: PayloadAction<T_Client[]>) => {
      state.clients = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //---------------------------------------------------------------------
      .addCase(getClients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getClients.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.clients = payload
      })
      .addCase(getClients.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || ''
      })
  },
})

export const { dummyReducer } = clientSlice.actions
export default clientSlice.reducer
