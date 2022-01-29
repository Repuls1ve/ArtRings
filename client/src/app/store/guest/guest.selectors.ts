import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { GuestState } from './guest.reducer'

const guestFeature = (state: AppState) => state.guest

export const selectGuest = createSelector(
  guestFeature,
  (state: GuestState) => state
)