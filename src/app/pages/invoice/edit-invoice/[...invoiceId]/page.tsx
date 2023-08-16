'use cleint'

import React from 'react'

export default function EditInvoicePage({
  params,
}: {
  params: { invoiceId: string }
}) {
  const invoieId = params.invoiceId
  console.log('invoieId', invoieId[0])

  return <div>Invoice Id: {invoieId}</div>
}
