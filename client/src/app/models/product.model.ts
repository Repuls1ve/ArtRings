import { ISliderImage } from '../components/slider/slider.component'

export interface IProduct {
  _id: string
  identifier: string
  category: IProductCategory
  descriptions: string[]
  price: IProductPrice
  sizes: IProductSizes
  reviews: IProductReview[]
  images: IProductImage[]
  discount: IProductDiscount | null
  production: number
  material: string
  rating: number
  tags: string[]
  inserts: boolean
  stock: boolean
}

export type IProductPrice = number

export type IProductCategory = 'wedding-rings' | 'wedding-duets' | 'engagement-rings'

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

export interface IProductImage extends ISliderImage {}


