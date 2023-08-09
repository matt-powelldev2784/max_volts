'use client'

import { useEffect, useState } from 'react'
import { InputField } from './components/InputField'
import { useFormik } from 'formik'

export const Invoice = () => {
  const [clients, setClients] = useState([])
  console.log('clients', clients)

  const formik = useFormik({
    initialValues: {
      clientId: '',
    },
    onSubmit: (values) => {
      console.log('values', values)
    },
  })

  useEffect(() => {
    const getClientsData = async () => {
      const res = await fetch(`/api/protected/client`)
      const clientsData = await res.json()
      setClients(clientsData)
    }
    getClientsData()
  }, [])

  return (
    <form className="w-[300px]">
      <p>Invoice</p>
      <InputField
        formik={formik}
        htmlFor="clientId"
        labelText="Select Client"
        inputType="text"
      />
    </form>
  )
}
