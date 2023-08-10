import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { SelectField } from './SelectField'
import { InputField } from './InputField'
import { useFormik } from 'formik'
import { Button } from '@/ui/button/button'
import * as Yup from 'yup'

export const InvoiceRow = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const clients = useAppSelector((state) => state.clientReducer.clients)

  const formik = useFormik({
    initialValues: {
      clientId: '',
      totalAmount: '0.001',
    },
    validationSchema: Yup.object({
      clientId: Yup.string().required('Please input a value client'),
      totalAmount: Yup.string().required('Please input a invoice total'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true)
      console.log('values', values)
    },
  })

  const clientSelectOptionsJsx = clients.map((client) => {
    return (
      <option key={client.id} value={client.id}>
        {`${client.name} @ ${client.companyName}`}
      </option>
    )
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <p>Create Invoice</p>

      <SelectField formik={formik} htmlFor="clientId" labelText="Select Client">
        <option value="">Select a client</option>
        {clientSelectOptionsJsx}
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
        buttonText="Create Invoice"
        disabled={isLoading}
      />
    </form>
  )
}
