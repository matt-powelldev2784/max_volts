'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import {
  toggleInvoiceIsPaid,
  updateInvoice,
  setErrorState,
} from '@/redux/slice/invoiceSlice'
import { AddProduct } from './components/addProduct/AddProduct'
import { ClientText } from './components/ClientText/ClientText'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { InvoiceRowModal } from './components/invoiceRowModal/InvoiceRowModal'
import { ErrorMessage } from '@/app/ui/formElements/ErrorMessage'
import { PageTitle, Button } from '@/app/ui/'
import { useRouter } from 'next/navigation'
import { InvoiceStatus } from './components/invoiceStatus/InvoiceStatus'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  useInvoice(invoiceId)

  const invoiceApiError = useAppSelector((state) => state.invoiceReducer.error)
  const isLoading = useAppSelector((state) => state.invoiceReducer.isLoading)
  const updateSuccess = useAppSelector(
    (state) => state.invoiceReducer.updateSuccess
  )
  const invoice = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice
  )
  const invoiceRows = useAppSelector(
    (state) => state.invoiceReducer.invoiceRows
  )
  const showProductModal = useAppSelector(
    (state) => state.invoiceReducer.displayAddProductModal
  )
  const currentInvoiceRow = useAppSelector(
    (state) => state.invoiceReducer.currentInvoiceRow
  )
  const totalPrice = useAppSelector((state) => state.invoiceReducer.totalPrice)
  const isPaid = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice?.paid
  )
  const isActive = useAppSelector(
    (state) => state.invoiceReducer.currentEditInvoice?.isActive
  )

  const invoiceNum = invoice?.invoiceNum

  const clientText = invoice?.Client.companyName
    ? `${invoice?.Client.name} @ ${invoice?.Client.companyName}`
    : invoice?.Client.name

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.reduxId} {...product} />
  })

  const onUpdateInvoiceClick = async () => {
    if (!isActive) return
    if (invoiceRows.length === 0) {
      return dispatch(setErrorState('Please add at least one invoice row'))
    }
    if (!totalPrice || typeof totalPrice !== 'number') {
      return dispatch(setErrorState('Total price must be greater than 0'))
    }
    await dispatch(updateInvoice({ invoiceId, totalPrice, invoiceRows }))
    router.push(`/pages/invoice/pdf/${invoiceId}`)
  }

  return (
    <section className="w-screen mt-4 mb-8">
      <PageTitle
        text={`Edit Invoice ${invoiceNum ? invoiceNum : ''}`}
        imgPath={'/icons/invoice.svg'}
        divClasses="mb-2"
      />

      <InvoiceStatus isPaid={isPaid} isActive={isActive} />

      <div className="w-full flexCol">
        <div className="flexCol w-full md:w-1/3">
          {updateSuccess ? <ErrorMessage errorMessage={updateSuccess} /> : null}
          {invoiceApiError ? (
            <ErrorMessage errorMessage={invoiceApiError || undefined} />
          ) : null}
        </div>
      </div>

      <div className="w-full flexCol mim-w-[305px] px-2 lg:px-4">
        <div className="w-full flexCol md:p-2 gap-4 lg:flexRow md:px-12 lg:gap-16 mb-8 ">
          <ClientText clientText={clientText} />
          <AddProduct />
        </div>

        <div className="w-full lg:px:16 mim-w-[305px] md:p-2 ">
          <InvoiceRowHeader />
          {invoiceRowsJsx}
        </div>

        <p className="font-bold text-center mt-8 w-full mb-2">
          Total Price : £{Number(totalPrice).toFixed(2)}
        </p>

        <div className="flexRow flex-wrap gap-4 mt-4 w-full min-w-[320px]">
          <Button
            type="button"
            optionalClasses={`text-white text-sm w-full h-[42.5px] max-w-[320px] ${
              isLoading ? 'bg-mvGreen/50' : 'bg-mvGreen'
            } `}
            buttonText={`${
              isPaid ? 'Set Invoice To Due' : 'Set Invoice To Paid'
            }`}
            disabled={isLoading}
            isLoading={isLoading}
            onClick={() => dispatch(toggleInvoiceIsPaid(invoiceId))}
          />

          <Button
            type="button"
            optionalClasses={`text-white text-sm w-full h-[42.5px] max-w-[320px] ${
              isLoading || isPaid ? 'bg-mvOrange/50' : 'bg-mvOrange'
            } `}
            buttonText="Update Invoice"
            disabled={isLoading || isPaid}
            isLoading={isLoading}
            onClick={onUpdateInvoiceClick}
          />

          {/* <Button
            type="button"
            optionalClasses={`text-white text-sm bg-mvOrange h-full w-[150px] md:w-[160px] max-h-[37px] ${
              isLoading ? 'bg-mvOrange/50' : 'bg-mvOrange'
            }`}
            buttonText={`${isActive ? 'Close Invoice' : 'Open Invoice'}`}
            disabled={isLoading}
            isLoading={isLoading}
            onClick={() => dispatch(toggleInvoiceIsActive(invoiceId))}
          /> */}
        </div>
      </div>

      {showProductModal && currentInvoiceRow?.reduxId ? (
        <InvoiceRowModal {...currentInvoiceRow} />
      ) : null}
    </section>
  )
}
