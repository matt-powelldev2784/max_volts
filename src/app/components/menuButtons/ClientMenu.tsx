'use client'

import { Button } from '@/app/ui/button/button'
import { useRouter } from 'next/navigation'
import { PageTitle } from '@/app/lib/PageTitle'

export const ClientMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mt-4 mb-2">
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
          router.push('/pages/add-client')
        }}
      />
    </div>
  )
}
