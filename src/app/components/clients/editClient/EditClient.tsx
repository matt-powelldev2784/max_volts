'use client'

import { useState } from 'react'
import { InputField } from '@/app/ui/formElements/InputField'
import { useEditClientFormik } from './lib/useEditCleintFormik'
import { PageTitle, Button } from '@/app/ui/'
import { T_Client } from '@/types'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/reduxsHooks'
import { setClientIsHidden } from '@/redux/slice/clientSlice'

interface EditClientProps {
  client: T_Client
}

export const EditClient = ({ client }: EditClientProps) => {
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const formik = useEditClientFormik(client)

  const isLoading = useAppSelector((state) => state.clientReducer.isLoading)

  const onDeleteClientClick = async () => {
    if (client.id) {
      await dispatch(setClientIsHidden(client.id))
      window.location.href = `/pages/client/client-list/1`
    }
  }

  return (
    <section className="min-h-screen w-screen">
      <div className="flexCol mt-4">
        <PageTitle text={'Edit Client'} imgPath={'/icons/person.svg'} />

        <form
          className="w-screen md:w-[400px] flexCol min-w-[310px] p-2"
          onSubmit={formik.handleSubmit}
        >
          <InputField
            formik={formik}
            htmlFor="name"
            labelText="Name"
            inputType="text"
            imagePath="/icons/person.svg"
            spanText=" *"
          />

          <InputField
            formik={formik}
            htmlFor="companyName"
            labelText="Company Name"
            inputType="text"
            imagePath="/icons/id_badge.svg"
          />

          <InputField
            formik={formik}
            htmlFor="add1"
            labelText="Address 1"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="add2"
            labelText="Address 2"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="postcode"
            labelText="Post Code"
            inputType="text"
            imagePath="/icons/location.svg"
          />

          <InputField
            formik={formik}
            htmlFor="tel"
            labelText="Telelphone Number"
            inputType="text"
            imagePath="/icons/tel.svg"
          />

          <InputField
            formik={formik}
            htmlFor="email"
            labelText="Email"
            inputType="text"
            imagePath="/icons/email.svg"
          />

          <Button
            type="submit"
            optionalClasses={`w-full text-white text-sm bg-mvOrange h-[42.5px] m-4 ${
              formik.isSubmitting ? 'bg-mvOrange/50' : 'bg-mvOrange'
            }`}
            buttonText="Update Client"
            disabled={formik.isSubmitting}
          />
        </form>

        <div className="w-screen md:w-[400px] flexCol min-w-[310px] p-2 mt-4">
          {confirmDelete ? (
            <Button
              type="button"
              optionalClasses={`text-white text-sm h-full w-full max-h-[42.5px] ${
                isLoading ? 'bg-darkRed/25' : 'bg-darkRed'
              }`}
              buttonText="Confirm Delete Client"
              disabled={isLoading === true}
              onClick={onDeleteClientClick}
            />
          ) : (
            <Button
              type="button"
              optionalClasses={`text-white text-sm bg-darkBlack h-full w-fit max-h-[42.5px]`}
              buttonText="Delete Client"
              disabled={isLoading === true}
              onClick={() => {
                setConfirmDelete(true)
              }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
