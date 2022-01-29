import { guestReducer } from './guest/guest.reducer'

export type status = 'pending' | 'loading' | 'error' | 'success'

export interface IError {
  code: number
  message: string
}

export enum Features {
  Guest = 'guest'
}

export const AppReducers = {
  [Features.Guest]: guestReducer
}