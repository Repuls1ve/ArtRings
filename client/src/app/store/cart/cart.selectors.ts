import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { CartState } from './cart.reducer'

const cartFeature = (state: AppState) => state.cart

export const selectCart = createSelector(
  cartFeature,
  (state: CartState) => state
)

export const selectCartQuantity = createSelector(
  cartFeature,
  (state: CartState) => state.data.items?.length || 0
)