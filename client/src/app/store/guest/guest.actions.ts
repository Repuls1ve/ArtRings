import { createAction, props } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { error } from '../app.reducers'

export const identifyGuest = createAction(
  '[Guest] Identify Guest'
)

export const identifyGuestSuccess = createAction(
  '[Guest] Identify Guest Success',
  props<{data: IGuest['metrics']}>()
)

export const identifyGuestFailure = createAction(
  '[Guest] Identify Guest Failure',
  props<{error: error}>()
)

export const updateGuestMetrics = createAction(
  '[Guest] Update Guest Metrics',
  props<{data: IGuest['metrics']}>()
)