'use client'

import { useEffect, useState } from 'react'
import { SelectField } from './components/SelectField'
import { InputField } from './components/InputField'
import { useFormik } from 'formik'
import { ClientName } from '@/types/clientName'
import { Button } from '@/ui/button/button'

export const Invoice = () => {
  const [clients, setClients] = useState<ClientName[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  console.log('clients', clients)

  const formik = useFormik({
    initialValues: {
      selectClient: '',
      description: '',
    },
    onSubmit: (values) => {
      setIsLoading(true)
      console.log('values', values)
    },
  })

  useEffect(() => {
    const getClientsData = async () => {
      const res = await fetch(`/api/protected/client/clientname`)
      const clientsData: ClientName[] = await res.json()
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
        htmlFor="description"
        labelText="Description"
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
