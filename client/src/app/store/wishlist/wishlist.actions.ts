import { createAction, props } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { IProduct } from 'src/app/models/product.model'
import { error } from '../app.reducers'

export const loadWishlist = createAction(
  '[Wishlist] Load Wishlist'
)

export const loadWishlistSuccess = createAction(
  '[Wishlist] Load Wishlist Success',
  props<{data: Pick<IGuest, 'wishlist' | 'metrics'>}>()
)

export const loadWishlistFailure = createAction(
  '[Wishlist] Load Wishlist Failure',
  props<{error: error}>()
)

export const addWished = createAction(
  '[Wishlist] Add Wished',
  props<{data: IProduct['_id']}>()
)

export const addWishedSuccess = createAction(
  '[Wishlist] Add Wished Success',
  props<{data: Pick<IGuest, 'wishlist' | 'metrics'>}>()
)

export const addWishedFailure = createAction(
  '[Wishlist] Add Wished Failure',
  props<{error: error}>()
)

export const removeWished = createAction(
  '[Wishlist] Remove Wished',
  props<{data: IProduct['_id']}>()
)

export const removeWishedSuccess = createAction(
  '[Wishlist] Remove Wished Success',
  props<{data: Pick<IGuest, 'wishlist' | 'metrics'>}>()
)

export const removeWishedFailure = createAction(
  '[Wishlist] Remove Wished Failure',
  props<{error: error}>()
)

export const clearWishlist = createAction(
  '[Wishlist] Clear Wishlist'
)

export const clearWishlistSuccess = createAction(
  '[Wishlist] Clear Wishlist Success',
  props<{data: Pick<IGuest, 'wishlist' | 'metrics'>}>()
)

export const clearWishlistFailure = createAction(
  '[Wishlist] Clear Wishlist Failure',
  props<{error: error}>()
)