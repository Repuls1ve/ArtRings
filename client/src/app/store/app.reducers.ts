import { cartReducer } from './cart/cart.reducer'
import { guestReducer } from './guest/guest.reducer'
import { viewedReducer } from './viewed/viewed.reducer'
import { wishlistReducer } from './wishlist/wishlist.reducer'

export type status = 'pending' | 'loading' | 'error' | 'success'
export type error = string

export enum Features {
  Guest = 'guest',
  Cart = 'cart',
  Wishlist = 'wishlist',
  Viewed = 'viewed'
}

export const AppReducers = {
  [Features.Guest]: guestReducer,
  [Features.Cart]: cartReducer,
  [Features.Wishlist]: wishlistReducer,
  [Features.Viewed]: viewedReducer
}