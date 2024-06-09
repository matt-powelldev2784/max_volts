'use client'

import { useRouter } from 'next/navigation'
import { PageTitle, Button } from '@/app/ui/'
import Image from 'next/image'

export const ClientMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mt-4 mb-2 mx-4">
      <PageTitle
        text={'Client Menu'}
        imgPath={'/icons/person.svg'}
        divClasses=""
      />

      {/* ------------------------------------------------------------------------- */}

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Add Client"
        disabled={false}
        onClick={() => {
          router.push('/pages/client/add-client')
        }}
      >
        <Image
          src="/icons/add_client_white.svg"
          alt="Person icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>

      {/* ------------------------------------------------------------------------- */}

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Client List"
        disabled={false}
        onClick={() => {
          window.location.href = '/pages/client/client-list/1'
        }}
      >
        <Image
          src="/icons/person_white.svg"
          alt="Person icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>
    </div>
  )
}
