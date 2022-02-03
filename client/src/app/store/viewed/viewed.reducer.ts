import { createReducer, on } from '@ngrx/store'
import { IGuest } from 'src/app/models/guest.model'
import { error, status } from '../app.reducers'
import { addViewed, addViewedFailure, addViewedSuccess, clearViewed, clearViewedFailure, clearViewedSuccess, loadViewed, loadViewedFailure, loadViewedSuccess, removeViewed, removeViewedFailure, removeViewedSuccess } from './viewed.actions'

export interface ViewedState {
  status: status
  data: IGuest['viewed']
  error: error | null
}

const initialState: ViewedState = {
  status: 'pending',
  data: {} as IGuest['viewed'],
  error: null
}

export const viewedReducer = createReducer(
  initialState,
  on(loadViewed, state => ({
    ...state,
    status: 'loading'
  })),
  on(loadViewedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.viewed,
    error: null
  })),
  on(loadViewedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(addViewed, state => ({
    ...state,
    status: 'loading'
  })),
  on(addViewedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.viewed,
    error: null
  })),
  on(addViewedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(removeViewed, state => ({
    ...state,
    status: 'loading'
  })),
  on(removeViewedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.viewed,
    error: null
  })),
  on(removeViewedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  })),
  on(clearViewed, state => ({
    ...state,
    status: 'loading'
  })),
  on(clearViewedSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data.viewed,
    error: null
  })),
  on(clearViewedFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  }))
)