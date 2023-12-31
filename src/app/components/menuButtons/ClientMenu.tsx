'use client'

import { useRouter } from 'next/navigation'
import { PageTitle, Button } from '@/app/ui/'

export const ClientMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mt-4 mb-2 mx-4">
      <PageTitle
        text={'Client Menu'}
        imgPath={'/icons/person.svg'}
        divClasses=""
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Add Client"
        disabled={false}
        onClick={() => {
          router.push('/pages/client/add-client')
        }}
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Client List"
        disabled={false}
        onClick={() => {
          window.location.href = '/pages/client/client-list/1'
        }}
      />
    </div>
  )
}
