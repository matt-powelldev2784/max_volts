import { StoreItemCategory } from '@prisma/client'

export interface StoreItemType {
  name: string
  image: string
  brand: string
  description: string
  price: number
  category: StoreItemCategory
}
