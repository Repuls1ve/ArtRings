import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { ReviewsState } from './reviews.reducer'

export const reviewsFeature = (state: AppState) => state.reviews

export const selectReviews = createSelector(
  reviewsFeature,
  (state: ReviewsState) => state
)