'use client'

import { T_Client } from '@/types'
import { Button } from '@/app/ui/'
import { useRouter } from 'next/navigation'

interface T_ClientListItem extends T_Client {
  header?: boolean
}
interface ClientListItemProps {
  client: T_ClientListItem
}

export const ClientListItem = ({ client }: ClientListItemProps) => {
  const router = useRouter()

  const { id, name, companyName, add1, add2, postcode, tel, email, header } =
    client

  return (
    <section
      className={`w-full flex flex-fow gap-4 sm:gap-2 h-fit max-w-[1100px] overflow-hidden sm:max-w-[95vw] m-auto rounded-lg mb-1 min-w-[306px] p-2 break-all ${
        header ? 'bg-darkBlack text-white' : 'bg-darkBlack/5'
      }`}
    >
      <p className="h-full w-full lg:max-w-[200px] text-sm flex">
        {header ? 'Name' : `${name}`}
      </p>
      <p className="h-full w-full text-sm lg:flex hidden">
        {header ? 'Company' : `${companyName}`}
      </p>
      <p className="h-full w-full max-w-[200px] text-sm lg:flex hidden ">
        {header ? 'Add1' : `${add1}`}
      </p>
      <p className="h-full w-full max-w-[2000px] text-sm lg:flex hidden">
        {header ? 'Add2' : `${add2}`}
      </p>
      <p className="h-full w-full max-w-[120px] text-sm flex">
        {header ? 'Tel' : `${tel}`}
      </p>
      <p className="h-full w-full max-w-[150px] text-sm md:flex hidden">
        {header ? 'Email' : `${email}`}
      </p>

      <p className="h-full min-w-[75px] text-sm lg:flex hidden">
        {header ? 'Post Code' : `${postcode}`}
      </p>

      <div
        className={`flex flex-row gap-2 md:pl-2 break-normal ${
          header ? 'opacity-0 h-0' : null
        }`}
      >
        <Button
          type="button"
          optionalClasses="text-white text-sm bg-mvOrange h-full w-full max-h-[37px]"
          buttonText="Edit"
          onClick={() => router.push(`/pages/client/edit-client/${id}`)}
        />
      </div>
    </section>
  )
}
