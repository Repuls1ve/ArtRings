import { ISliderImage } from '../components/slider/slider.component'

export interface IProduct {
  _id: string
  identifier: string
  description: string
  price: IProductPrice
  sizes: IProductSizes
  reviews: IProductReview[]
  images: IProductImage[]
  discount: IProductDiscount | null
  production: number
  material: string
  rating: number
  stock: boolean
}

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

export interface IProductImage extends ISliderImage {}


