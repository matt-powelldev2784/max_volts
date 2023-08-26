'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { updateInvoice } from '@/redux/slice/invoiceSlice'
import Image from 'next/image'
import { AddProduct } from './components/addProduct/AddProduct'
import { ClientText } from './components/ClientText/ClientText'
import { InvoiceRowText } from './components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from './components/InvoiceRowHeader/InvoiceRowHeader'
import { InvoiceRowModal } from './components/invoiceRowModal/InvoiceRowModal'
import { Button } from '@/ui/button/button'
import { ErrorMessage } from '@/app/lib/formElements/ErrorMessage'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  const dispatch = useAppDispatch()
  useInvoice(invoiceId)

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
  const invoiceNum = invoice?.invoiceNum

  const clientText = invoice?.Client.companyName
    ? `${invoice?.Client.name} @ ${invoice?.Client.companyName}`
    : invoice?.Client.name

  const invoiceRowsJsx = invoiceRows.map((product) => {
    return <InvoiceRowText key={product.reduxId} {...product} />
  })

  return (
    <section className="w-screen">
      <div className="flexRow gap-2 mt-4 mb-5">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">Edit Invoice {invoiceNum}</p>
      </div>

      <div className="w-full flexCol">
        <div className="flexCol w-full md:w-1/3">
          {updateSuccess ? <ErrorMessage errorMessage={updateSuccess} /> : null}
          {isLoading ? (
            <Image
              src="/icons/loading.svg"
              alt="Person icon"
              width={30}
              height={30}
              className="animate-spin"
            />
          ) : null}
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
          disabled={false}
          onClick={() => {
            dispatch(updateInvoice({ invoiceId, totalPrice, invoiceRows }))
          }}
        />
      </div>

      {showProductModal && currentInvoiceRow?.reduxId ? (
        <InvoiceRowModal {...currentInvoiceRow} />
      ) : null}
    </section>
  )
}
