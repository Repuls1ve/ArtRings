import { IProduct } from 'src/products/interfaces/product.interface'

export interface IGuest {
  metrics: IMetrics
  wishlist: IWishlist
  viewed: IViewed
  cart: ICart
}

export interface ICart {
  items: ICartItem[]
  summary: IProduct['price']
}

export interface ICartItem extends IProduct {
  quantity: number
  total: IProduct['price']
}

export interface IMetrics {
  cart: number
  wishlist: number
  viewed: number
  activity: number
}

export interface IWishlist {
  items: IProduct[]
}

export interface IViewed {
  items: IProduct[]
}