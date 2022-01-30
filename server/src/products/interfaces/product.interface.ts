export interface IProduct {
  identifier: string
  description: string
  prices: IProductPrices
  sizes: IProductSizes
  reviews: IProductReview[]
  images: IProductImage[]
  discount: IProductDiscount | null
  production: number
  material: string
  rating: number
  stock: boolean
}

export interface IProductPrices {
  [currency: string]: number
}

export interface IProductSizes {
  male: number[]  
  female: number[]
}

export interface IProductDiscount {
  previous: IProductPrices
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