import { Features } from './app.reducers'
import { CartState } from './cart/cart.reducer'
import { GuestState } from './guest/guest.reducer'
import { ViewedState } from './viewed/viewed.reducer'
import { WishlistState } from './wishlist/wishlist.reducer'

export interface AppState {
  [Features.Guest]: GuestState,
  [Features.Cart]: CartState,
  [Features.Wishlist]: WishlistState,
  [Features.Viewed]: ViewedState
}