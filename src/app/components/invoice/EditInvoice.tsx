'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import {
  toggleInvoiceIsPaid,
  toggleInvoiceIsActive,
  updateInvoice,
} from '@/redux/slice/invoiceSlice'
import { AddProduct } from './components/addProduct/AddProduct'
import { ClientText } from './components/ClientText/ClientText'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { InvoiceRowModal } from './components/invoiceRowModal/InvoiceRowModal'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'
import { PageTitle, IsLoadingJsx, Button } from '@/app/ui/'
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

      {isLoading ? <IsLoadingJsx /> : null}

      <div className="w-full flexCol">
        <div className="flexCol w-full md:w-1/3">
          {updateSuccess ? <ErrorMessage errorMessage={updateSuccess} /> : null}
          {invoiceApiError ? <ErrorMessage /> : null}
        </div>
      </div>

      <div className="w-full flexCol mim-w-[305px] px-2 lg:px-4">
        <div className="w-full flexCol md:p-2 gap-4 lg:flexRow md:px-12 lg:gap-16 mb-8">
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

        <Button
          type="button"
          optionalClasses={`text-white text-sm w-full h-[42.5px] max-w-[320px] ${
            isLoading || !isActive ? 'bg-mvOrange/50' : 'bg-mvOrange'
          } `}
          buttonText="Update Invoice"
          disabled={isLoading || !isActive}
          onClick={onUpdateInvoiceClick}
        />

        <div className="flexRow gap-2 mt-4">
          <Button
            type="button"
            optionalClasses={`text-white text-sm bg-mvOrange h-full w-[150px] md:w-[160px] max-h-[37px] ${
              isLoading || !isActive ? 'bg-mvOrange/50' : 'bg-mvOrange'
            }`}
            buttonText={`${isPaid ? 'Set NOT Paid' : 'Set Paid'}`}
            disabled={isLoading || !isActive}
            onClick={() => dispatch(toggleInvoiceIsPaid(invoiceId))}
          />
          <Button
            type="button"
            optionalClasses={`text-white text-sm bg-mvOrange h-full w-[150px] md:w-[160px] max-h-[37px] ${
              isLoading ? 'bg-mvOrange/50' : 'bg-mvOrange'
            }`}
            buttonText={`${isActive ? 'Close Invoice' : 'Open Invoice'}`}
            disabled={isLoading}
            onClick={() => dispatch(toggleInvoiceIsActive(invoiceId))}
          />
        </div>
      </div>

      {showProductModal && currentInvoiceRow?.reduxId ? (
        <InvoiceRowModal {...currentInvoiceRow} />
      ) : null}
    </section>
  )
}
