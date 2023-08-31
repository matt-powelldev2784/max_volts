'use client'

import { useRouter } from 'next/navigation'
import { PageTitle, Button } from '@/app/ui/'

export const ProductMenu = () => {
  const router = useRouter()

  return (
    <div className="flexCol gap-4 mt-4 mb-2 mx-4">
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
          router.push('/pages/product/add-product')
        }}
      />

      <Button
        type="button"
        optionalClasses="text-white text-sm bg-mvOrange h-[42.5px] w-[300px]"
        buttonText="Product List"
        disabled={false}
        onClick={() => {
          window.location.href = '/pages/product/product-list/1'
        }}
      />
    </div>
  )
}
