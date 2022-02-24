import { createAction, props } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { AddReviewDto } from 'src/app/services/reviews.service'
import { error } from '../app.reducers'

export const addReview = createAction(
  '[Reviews] Add Review',
  props<AddReviewDto>()
)

export const addReviewSuccess = createAction(
  '[Reviews] Add Review Success',
  props<{data: IProduct}>()
)

export const addReviewFailure = createAction(
  '[Reviews] Add Review Failure',
  props<{error: error}>()
)