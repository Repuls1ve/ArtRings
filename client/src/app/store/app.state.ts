import { Features } from './app.reducers'
import { GuestState } from './guest/guest.reducer'

export interface AppState {
  [Features.Guest]: GuestState
}