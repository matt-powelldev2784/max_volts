'use client'

import { Button } from '@/ui/button/button'
import { useRouter } from 'next/navigation'
import { PageTitle } from '@/app/lib/PageTitle'

export const ProductMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mt-4 mb-2">
      <PageTitle
        text={'Product Menu'}
        imgPath={'/icons/add_product.svg'}
        divClasses=""
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Add Product"
        disabled={false}
        onClick={() => {
          router.push('/pages/add-product')
        }}
      />
    </div>
  )
}
