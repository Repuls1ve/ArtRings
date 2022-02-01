import { cartReducer } from './cart/cart.reducer'
import { guestReducer } from './guest/guest.reducer'

export type status = 'pending' | 'loading' | 'error' | 'success'
export type error = string

export enum Features {
  Guest = 'guest',
  Cart = 'cart'
}

export const AppReducers = {
  [Features.Guest]: guestReducer,
  [Features.Cart]: cartReducer
}