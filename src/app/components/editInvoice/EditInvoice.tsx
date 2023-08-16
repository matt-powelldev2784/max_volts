'use client'

import { useInvoice } from '@/app/lib/hooks/useInvoice'
import { useAppSelector } from '@/redux/hooks/reduxsHooks'
import Image from 'next/image'
import { AddProduct } from '../createInvoice/components/addProduct/AddProduct'
import { ClientText } from './components/ClientText'

interface EditInvoiceProps {
  invoiceId: string
}

export const EditInvoice = ({ invoiceId }: EditInvoiceProps) => {
  useInvoice(invoiceId)
  const invoice = useAppSelector(
    (state) => state.newInvoiceReducer.currentEditInvoice
  )

  const invoiceNum = invoice?.invoiceNum

  const clientText = invoice?.Client.companyName
    ? `${invoice?.Client.name} @ ${invoice?.Client.companyName}`
    : invoice?.Client.name

  return (
    <section>
      <div className="flexRow gap-2 mt-4 mb-4">
        <Image
          src="/icons/invoice.svg"
          alt="Person icon"
          width={30}
          height={30}
          className=""
        />
        <p className="text-lg">Edit Invoice {invoiceNum}</p>
      </div>

      <div className="w-full flexRow p-2 md:px-12 lg:px-16 gap-4 lg:gap-16 flex-wrap lg:flex-nowrap mb-8">
        <ClientText clientText={clientText} />
        <AddProduct />
      </div>
    </section>
  )
}
