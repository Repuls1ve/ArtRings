import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { ViewedState } from './viewed.reducer'

const viewedFeature = (state: AppState) => state.viewed

export const selectViewed = createSelector(
  viewedFeature,
  (state: ViewedState) => state
)