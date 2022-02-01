import { Features } from './app.reducers'
import { CartState } from './cart/cart.reducer'
import { GuestState } from './guest/guest.reducer'

export interface AppState {
  [Features.Guest]: GuestState,
  [Features.Cart]: CartState
}