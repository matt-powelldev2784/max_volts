import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit'
import { T_Client } from '@/types'
import { apiCall } from '@/app/lib/apiCall'

type T_ClienteState = {
  isLoading: boolean
  error: string
  clients: T_Client[]
  currentClient: T_Client | null
}

const initialState: T_ClienteState = {
  isLoading: false,
  error: '',
  clients: [],
  currentClient: null,
}

export const getClients = createAsyncThunk('client/getClient', async () => {
  try {
    const clientsData: T_Client[] = await apiCall({
      route: `/api/protected/client`,
    })

    return clientsData
  } catch (err: any) {
    throw Error(err)
  }
})

export const addClient = createAsyncThunk(
  'client/addClient',
  async (clientDetails: T_Client) => {
    try {
      const clientData = await apiCall({
        httpMethod: 'POST',
        route: `/api/protected/client`,
        body: clientDetails,
      })

      return clientData
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const updateClient = createAsyncThunk(
  'client/updateClient',
  async (clientDetails: T_Client) => {
    try {
      const clientData = await apiCall({
        httpMethod: 'PUT',
        route: `/api/protected/client/single`,
        body: clientDetails,
      })

      return clientData
    } catch (err: any) {
      throw Error(err)
    }
  }
)

export const setClientIsHidden = createAsyncThunk(
  'client/setClientIsHidden',
  async (id: string) => {
    try {
      const clientData = await apiCall({
        httpMethod: 'PUT',
        route: `/api/protected/client/hide-client?client_id=${id}`,
      })

      return clientData
    } catch (err: any) {
      throw Error(err)
    }
  }
)

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
        state.error = ''
      })
      .addCase(getClients.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.clients = payload
      })
      .addCase(getClients.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || ''
      })
      //---------------------------------------------------------------------
      .addCase(addClient.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(addClient.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentClient = payload.newClient
      })
      .addCase(addClient.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        state.error = error.message || ''
      })
      //---------------------------------------------------------------------
      .addCase(updateClient.pending, (state) => {
        state.isLoading = true
        state.error = ''
        state.currentClient = null
      })
      .addCase(updateClient.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.currentClient = payload
      })
      .addCase(updateClient.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        error.message || 'Server Error. Please try again later'
      })
      //---------------------------------------------------------------------
      .addCase(setClientIsHidden.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(setClientIsHidden.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(setClientIsHidden.rejected, (state, { error }: AnyAction) => {
        state.isLoading = false
        error.message || 'Server Error. Please try again later'
      })
  },
})

export const { dummyReducer } = clientSlice.actions
export default clientSlice.reducer
