import { createAction, props } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { IProduct } from 'src/app/models/product.model'
import { error } from '../app.reducers'

export const loadCart = createAction(
  '[Cart] Load Cart'
)

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{data: Pick<IGuest, 'cart' | 'metrics'>}>()
)

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{error: error}>()
)

export const addProduct = createAction(
  '[Cart] Add Product',
  props<{data: IProduct['_id']}>()
)

export const addProductSuccess = createAction(
  '[Cart] Add Product Success',
  props<{data: Pick<IGuest, 'cart' | 'metrics'>}>()
)

export const addProductFailure = createAction(
  '[Cart] Add Product Failure',
  props<{error: error}>()
)

export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{data: IProduct['_id']}>()
)

export const removeProductSuccess = createAction(
  '[Cart] Remove Product Success',
  props<{data: Pick<IGuest, 'cart' | 'metrics'>}>()
)

export const removeProductFailure = createAction(
  '[Cart] Remove Product Failure',
  props<{error: error}>()
)

export const clearCart = createAction(
  '[Cart] Clear Cart'
)

export const clearCartSuccess = createAction(
  '[Cart] Clear Cart Success',
  props<{data: Pick<IGuest, 'cart' | 'metrics'>}>()
)

export const clearCartFailure = createAction(
  '[Cart] Clear Cart Failure',
  props<{error: error}>()
)