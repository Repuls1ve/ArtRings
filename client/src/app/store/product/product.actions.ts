import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { error } from '../app.reducers'

export const loadProduct = createAction(
  '[Product] Load Product',
  props<{id: IProduct['_id']}>()
)

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{data: IProduct}>()
)

export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{error: error}>()
)