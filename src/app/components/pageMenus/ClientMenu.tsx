'use client'

import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'
import { PageTitle } from '@/app/lib/PageTitle'

export const ClientMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mx-8 mb-2">
      <PageTitle
        text={'Client Menu'}
        imgPath={'/icons/person.svg'}
        divClasses="mb-0"
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange w-full h-[42.5px] w-[300px]"
        buttonText="Add Client"
        disabled={false}
        onClick={() => {
          router.push('/pages/add-client')
        }}
      />
    </div>
  )
}
