import { createReducer, on } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { error, status } from '../app.reducers'
import { addWished, addWishedFailure, addWishedSuccess, clearWishlistFailure, clearWishlist, clearWishlistSuccess, loadWishlist, loadWishlistFailure, loadWishlistSuccess, removeWished, removeWishedFailure, removeWishedSuccess } from './wishlist.actions'

export interface WishlistState {
  status: status
  data: IGuest['wishlist']
  error: error | null
}

const initialState: WishlistState = {
  status: 'pending',
  data: {} as IGuest['wishlist'],
  error: null
}

export const wishlistReducer = createReducer(
  initialState,
  on(loadWishlist, state => ({
    ...state,
    status: 'loading'
  })),
  on(loadWishlistSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.wishlist,
    error: null
  })),
  on(loadWishlistFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(addWished, state => ({
    ...state,
    status: 'loading'
  })),
  on(addWishedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.wishlist,
    error: null
  })),
  on(addWishedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(removeWished, state => ({
    ...state,
    status: 'loading'
  })),
  on(removeWishedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.wishlist,
    error: null
  })),
  on(removeWishedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(clearWishlist, state => ({
    ...state,
    status: 'loading'
  })),
  on(clearWishlistSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.wishlist,
    error: null
  })),
  on(clearWishlistFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  }))
)