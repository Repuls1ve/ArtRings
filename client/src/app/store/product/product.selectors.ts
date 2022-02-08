import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { ProductState } from './product.reducer'

export const productFeature = (state: AppState) => state.product

export const selectProduct = createSelector(
  productFeature,
  (state: ProductState) => state
)