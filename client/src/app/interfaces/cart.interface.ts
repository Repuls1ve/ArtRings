import { IProduct } from '../models/product.model'

export interface ICart {
  items: ICartItem[]
  summary: IProduct['prices']
}

export interface ICartItem extends IProduct {
  quantity: number
  total: IProduct['prices']
}