import { IProduct } from 'src/products/interfaces/product.interface'

export interface IFilters {
  sorting?: ISorting
  category: IProduct['category']
  prices?: IFilterPrices
  inserts?: IProduct['inserts']
  tags?: IProduct['tags']  
}

export interface IFilterPrices {
  start?: number
  end?: number
}

export type ISorting = {
  attribute: 'rating' | 'price' | 'title'
  order: ISortingOrder
}

export type ISortingOrder = 'asc' | 'desc'