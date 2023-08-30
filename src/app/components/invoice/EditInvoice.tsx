'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { updateInvoice } from '@/redux/slice/invoiceSlice'
import { AddProduct } from './components/addProduct/AddProduct'
import { ClientText } from './components/ClientText/ClientText'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { InvoiceRowModal } from './components/invoiceRowModal/InvoiceRowModal'
import { Button } from '@/app/ui/button/button'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'
import { InvoiceIsLoading } from './components/invoiceIsLoading/InvoiceIsLoading'
import { PageTitle } from '@/app/lib/PageTitle'
import { useRouter } from 'next/navigation'
import { InvoiceStatus } from './components/invoiceStatus/InvoiceStatus'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  useInvoice(invoiceId)

  const {
    invoiceApiError,
    isLoading,
    updateSuccess,
    invoice,
    invoiceRows,
    showProductModal,
    currentInvoiceRow,
    totalPrice,
    isPaid,
    isActive,
  } = useAppSelector((state) => ({
    invoiceApiError: state.invoiceReducer.error,
    isLoading: state.invoiceReducer.isLoading,
    updateSuccess: state.invoiceReducer.updateSuccess,
    invoice: state.invoiceReducer.currentEditInvoice,
    invoiceRows: state.invoiceReducer.invoiceRows,
    showProductModal: state.invoiceReducer.displayAddProductModal,
    currentInvoiceRow: state.invoiceReducer.currentInvoiceRow,
    totalPrice: state.invoiceReducer.totalPrice,
    isPaid: state.invoiceReducer.currentEditInvoice?.paid,
    isActive: state.invoiceReducer.currentEditInvoice?.isActive,
  }))
  const invoiceNum = invoice?.invoiceNum

  const clientText = invoice?.Client.companyName
    ? `${invoice?.Client.name} @ ${invoice?.Client.companyName}`
    : invoice?.Client.name

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.reduxId} {...product} />
  })

  const onUpdateInvoiceClick = async () => {
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

      {isPaid != undefined && isActive != undefined ? (
        <InvoiceStatus isPaid={isPaid} isActive={isActive} />
      ) : null}

      {isLoading ? <InvoiceIsLoading /> : null}

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
            isLoading ? 'bg-mvOrange/50' : 'bg-mvOrange'
          } `}
          buttonText="Update Invoice"
          disabled={isLoading}
          onClick={onUpdateInvoiceClick}
        />

        <div className="flexRow gap-2 mt-4">
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-[160px] max-h-[40px]"
            buttonText={`Invoice Paid`}
            onClick={() => router.push(`/pages/invoice/edit-invoice/`)}
          />
          <Button
            type="button"
            optionalClasses="text-white text-sm bg-mvOrange h-full w-[160px] max-h-[40px]"
            buttonText={`Close Invoice`}
            onClick={() => router.push(`/pages/invoice/edit-invoice/`)}
          />
        </div>
      </div>

      {showProductModal && currentInvoiceRow?.reduxId ? (
        <InvoiceRowModal {...currentInvoiceRow} />
      ) : null}
    </section>
  )
}
