import { createAction, props } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'

export const identifyGuest = createAction(
  '[Guest] Identify Guest'
)

export const identifyGuestSuccess = createAction(
  '[Guest] Identify Guest Success',
  props<{data: IGuest['metrics']}>()
)

export const identifyGuestFailure = createAction(
  '[Guest] Identify Guest Failure',
  props<{error: string}>()
)