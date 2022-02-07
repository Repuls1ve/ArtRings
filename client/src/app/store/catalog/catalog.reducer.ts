import { createReducer, on } from '@ngrx/store'
import { IPagination } from 'src/app/interfaces/pagination.interface'
import { IProduct } from 'src/app/models/product.model'
import { error, status } from '../app.reducers'
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './catalog.actions'

export interface CatalogState {
  status: status
  meta: IPagination['pagination']
  data: IProduct[]
  error: error | null
}

const initialState: CatalogState = {
  status: 'pending',
  meta: {} as IPagination['pagination'],
  data: [],
  error: null
}

export const catalogReducer = createReducer(
  initialState,
  on(loadProducts, state => ({
    ...state,
    status: 'loading'
  })),
  on(loadProductsSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.products,
    meta: payload.meta,
    error: null
  })),
  on(loadProductsFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  }))
)