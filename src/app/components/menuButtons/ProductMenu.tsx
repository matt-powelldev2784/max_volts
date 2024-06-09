'use client'

import { useRouter } from 'next/navigation'
import { PageTitle, Button } from '@/app/ui/'
import Image from 'next/image'

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
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Add Product"
        disabled={false}
        onClick={() => {
          router.push('/pages/product/add-product')
        }}
      >
        <Image
          src="/icons/add_product_white.svg"
          alt="Product icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>

      {/* ------------------------------------------------------------------------- */}

      <Button
        type="button"
        optionalClasses="text-white text-lg bg-mvOrange h-[145px] w-[300px] flex gap-2"
        buttonText="Product List"
        disabled={false}
        onClick={() => {
          window.location.href = '/pages/product/product-list/1'
        }}
      >
        <Image
          src="/icons/product_white.svg"
          alt="Product icon"
          width={80}
          height={80}
          className="p-2"
        />
      </Button>

      {/* ------------------------------------------------------------------------- */}
    </div>
  )
}
