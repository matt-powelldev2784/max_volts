'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks/reduxsHooks'
import { updateInvoice } from '@/redux/slice/newInvoiceSlice'
import Image from 'next/image'
import { AddProduct } from '../createInvoice/components/addProduct/AddProduct'
import { ClientText } from './components/ClientText'
import { InvoiceRowText } from '../createInvoice/components/InvoiceRowText/InvoiceRowText'
import { InvoiceRowHeader } from '../createInvoice/components/InvoiceRowHeader/InvoiceRowHeader'
import { InvoiceRowModal } from '../createInvoice/components/invoiceRowModal/InvoiceRowModal'
import { Button } from '@/ui/button/button'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  useInvoice(invoiceId)
  const dispatch = useAppDispatch()
  const invoice = useAppSelector(
    (state) => state.newInvoiceReducer.currentEditInvoice
  )
  const invoiceRows = useAppSelector(
    (state) => state.newInvoiceReducer.invoiceRows
  )
  const showProductModal = useAppSelector(
    (state) => state.newInvoiceReducer.displayAddProductModal
  )
  const currentInvoiceRow = useAppSelector(
    (state) => state.newInvoiceReducer.currentInvoiceRow
  )
  const totalPrice = useAppSelector(
    (state) => state.newInvoiceReducer.totalPrice
  )

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

      <div className="w-full flexCol mim-w-[305px] px-2 lg:px-4">
        <div className="w-full flexCol md:p-2 gap-4 lg:flexRow md:px-12 lg:gap-16 mb-8">
          <ClientText clientText={clientText} />
          <AddProduct />
        </div>

        <div className="w-full lg:px:16 mim-w-[305px] md:p-2 ">
          <InvoiceRowHeader />
          {invoiceRowsJsx}
        </div>

        <Button
          type="submit"
          optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] max-w-[320px]"
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
