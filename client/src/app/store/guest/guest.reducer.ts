import { createReducer, on } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { IError, status } from '../app.reducers'
import { identifyGuest, identifyGuestFailure, identifyGuestSuccess } from './guest.actions'

export interface GuestState {
  status: status
  data: IGuest['metrics']
  error: IError | null
}

const initialState: GuestState = {
  status: 'pending',
  data: {} as IGuest['metrics'],
  error: null
}

export const guestReducer = createReducer(
  initialState,
  on(identifyGuest, state => ({
    ...state,
    status: 'loading'
  })),
  on(identifyGuestSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data,
    error: null
  })),
  on(identifyGuestFailure, (state, error) => ({
    ...state,
    status: 'error',
    error: error
  }))
)