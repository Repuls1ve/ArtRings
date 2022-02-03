import { createAction, props } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { IProduct } from 'src/app/models/product.model'
import { error } from '../app.reducers'

export const loadViewed = createAction(
  '[Viewed] Load Viewed'
)

export const loadViewedSuccess = createAction(
  '[Viewed] Load Viewed Success',
  props<{data: Pick<IGuest, 'viewed' | 'metrics'>}>()
)

export const loadViewedFailure = createAction(
  '[Viewed] Load Viewed Failure',
  props<{error: error}>()
)

export const addViewed = createAction(
  '[Viewed] Add Viewed',
  props<{data: IProduct['_id']}>()
)

export const addViewedSuccess = createAction(
  '[Viewed] Add Viewed Success',
  props<{data: Pick<IGuest, 'viewed' | 'metrics'>}>()
)

export const addViewedFailure = createAction(
  '[Viewed] Add Viewed Failure',
  props<{error: error}>()
)

export const removeViewed = createAction(
  '[Viewed] Remove Viewed',
  props<{data: IProduct['_id']}>()
)

export const removeViewedSuccess = createAction(
  '[Viewed] Remove Viewed Success',
  props<{data: Pick<IGuest, 'viewed' | 'metrics'>}>()
)

export const removeViewedFailure = createAction(
  '[Viewed] Remove Viewed Failure',
  props<{error: error}>()
)

export const clearViewed = createAction(
  '[Viewed] Clear Viewed'
)

export const clearViewedSuccess = createAction(
  '[Viewed] Clear Viewed Success',
  props<{data: Pick<IGuest, 'viewed' | 'metrics'>}>()
)

export const clearViewedFailure = createAction(
  '[Viewed] Clear Viewed Failure',
  props<{error: error}>()
)