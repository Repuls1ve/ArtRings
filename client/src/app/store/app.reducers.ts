import { cartReducer } from './cart/cart.reducer'
import { catalogReducer } from './catalog/catalog.reducer'
import { guestReducer } from './guest/guest.reducer'
import { productReducer } from './product/product.reducer'
import { reviewsReducer } from './reviews/reviews.reducer'
import { viewedReducer } from './viewed/viewed.reducer'
import { wishlistReducer } from './wishlist/wishlist.reducer'

export type status = 'pending' | 'loading' | 'error' | 'success'
export type error = string

export enum Features {
  Guest = 'guest',
  Cart = 'cart',
  Wishlist = 'wishlist',
  Viewed = 'viewed',
  Catalog = 'catalog',
  Product = 'product',
  Reviews = 'reviews'
}

export const AppReducers = {
  [Features.Guest]: guestReducer,
  [Features.Cart]: cartReducer,
  [Features.Wishlist]: wishlistReducer,
  [Features.Viewed]: viewedReducer,
  [Features.Catalog]: catalogReducer,
  [Features.Product]: productReducer,
  [Features.Reviews]: reviewsReducer
}