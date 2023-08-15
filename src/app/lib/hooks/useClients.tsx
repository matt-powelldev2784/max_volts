import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { getClients } from '@/redux/slice/clientSlice'

export const useClients = () => {
  const dispatch = useAppDispatch()
  const clients = useAppSelector((state) => state.clientReducer.clients)

  useEffect(() => {
    dispatch(getClients())
  }, [dispatch])

  return clients
}
