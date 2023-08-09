'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './components/SelectField'
import { InputField } from './components/InputField'
import { useFormik } from 'formik'
import { ClientName } from '@/types/clientName'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'
import { apiCall } from '@/lib/apiCall'

export const Invoice = () => {
  const [clients, setClients] = useState<ClientName[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log('clients', clients)

  const formik = useFormik({
    initialValues: {
      selectClient: '',
      totalAmount: '',
    },
    validationSchema: Yup.object({
      selectClient: Yup.string().required('Please input a value client'),
      totalAmount: Yup.string().required('Please input a invoice total'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)

      //   const res = await apiCall({
      //     httpMethod: 'GET',
      //     route: `api/v1/order/${userId}`,
      //   })
      //   const { data } = res
      //   return data
      // },
    },
  })

  useEffect(() => {
    const getClientsData = async () => {
      const clientsData: ClientName[] = await apiCall({
        route: `/api/protected/client/clientname`,
      })
      setClients(clientsData)
    }
    getClientsData()
  }, [])

  const selectOptionsJsx = clients.map((client) => {
    return (
      <option key={client.id} value={client.id}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })

  return (
    <form
      className="w-[300px] border-2 border-red-500"
      onSubmit={formik.handleSubmit}
    >
      <p>Invoice</p>

      <SelectField
        formik={formik}
        htmlFor="selectClient"
        labelText="Select Client"
      >
        <option value="">Select a client</option>
        {selectOptionsJsx}
      </SelectField>

      <InputField
        formik={formik}
        htmlFor="totalAmount"
        labelText="Invoice Total"
        inputType="text"
      />

      <Button
        type="submit"
        optionalClasses="w-full bg-red-500 my-2"
        buttonText="Upload Image"
        disabled={isLoading}
      />
    </form>
  )
}
