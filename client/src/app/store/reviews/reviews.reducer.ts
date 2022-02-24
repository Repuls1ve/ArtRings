import { createReducer, on } from '@ngrx/store'
import { error, status } from '../app.reducers'
import { addProductFailure } from '../cart/cart.actions'
import { addReview, addReviewSuccess } from './reviews.actions'

export interface ReviewsState {
  status: status
  error: error | null
}

const initialState: ReviewsState = {
  status: 'pending',
  error: null
}

export const reviewsReducer = createReducer(
  initialState,
  on(addReview, state => ({
    ...state,
    status: 'pending'
  })),
  on(addReviewSuccess, (state) => ({
    ...state,
    status: 'success',
    error: null
  })),
  on(addProductFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  }))
)