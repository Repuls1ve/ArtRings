import { createReducer, on } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { error, status } from '../app.reducers'
import { addProduct, addProductFailure, addProductSuccess, clearCart, clearCartFailure, clearCartSuccess, loadCart, loadCartFailure, loadCartSuccess, removeProduct, removeProductFailure, removeProductSuccess } from './cart.actions'

export interface CartState {
  status: status
  data: IGuest['cart']
  error: error | null
}

const initialState: CartState = {
  status: 'pending',
  data: {} as IGuest['cart'],
  error: null
}

export const cartReducer = createReducer(
  initialState,
  on(loadCart, state => ({
    ...state,
    status: 'loading'
  })),
  on(loadCartSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.cart,
    error: null
  })),
  on(loadCartFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(addProduct, state => ({
    ...state,
    status: 'loading'
  })),
  on(addProductSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.cart,
    error: null
  })),
  on(addProductFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(removeProduct, state => ({
    ...state,
    status: 'loading'
  })),
  on(removeProductSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.cart,
    error: null
  })),
  on(removeProductFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(clearCart, state => ({
    ...state,
    status: 'loading'
  })),
  on(clearCartSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.cart,
    error: null
  })),
  on(clearCartFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
)