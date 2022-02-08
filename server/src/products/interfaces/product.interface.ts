export interface IProduct {
  identifier: string
  category: IProductCategory
  description: string
  price: IProductPrice
  sizes: IProductSizes
  reviews: IProductReview[]
  images: IProductImage[]
  discount: IProductDiscount | null
  production: number
  material: string
  tags: string[]
  rating: number
  inserts: boolean
  stock: boolean
}

export type IProductCategory = 'wedding-rings' | 'wedding-duets' | 'engagement-rings'

export type IProductPrice = number

export interface IProductSizes {
  male: number[]  
  female: number[]
}

export interface IProductDiscount {
  previous: IProductPrice
}

export interface IProductReview {
  author: string
  content: string
  rating: number
}

export interface IProductImage {
  source: string
  alt: string
  breakpoints?: string[]
}