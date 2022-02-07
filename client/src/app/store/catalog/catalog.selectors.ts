import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { CatalogState } from './catalog.reducer'

const catalogFeature = (state: AppState) => state.catalog

export const selectProducts = createSelector(
  catalogFeature,
  (state: CatalogState) => state
)