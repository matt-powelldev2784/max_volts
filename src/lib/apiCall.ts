import axios from 'axios'
import { ApiOptions } from '@/types/apiOptions'

export const apiCall = async (apiOptions: ApiOptions) => {
  const { httpMethod, route, body } = apiOptions

  try {
    let response: any

    switch (httpMethod) {
      case 'POST':
        response = await axios.post(route, body)
        break
      case 'GET':
        response = await axios.get(route)
        break
      case 'PUT':
        response = await axios.put(route)
        break
      case 'DELETE':
        response = await axios.delete(route)
        break
      default:
        response = await axios.get(route)
    }

    const { data } = response
    return data
  } catch (err: any) {
    console.log('error from api utility catch block')
    // console.log('err', err)
    if (err.response.data) {
      console.log('err.repsonse.data form api utility', err.response.data)
      throw err.response.data.errors[0].msg
    } else {
      throw Error(err)
    }
  }
}
