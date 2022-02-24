import { createReducer, on } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { error, status } from '../app.reducers'
import { loadProduct, loadProductFailure, loadProductSuccess } from './product.actions'

export interface ProductState {
  status: status
  data: IProduct
  error: error | null
}

const initialState: ProductState = {
  status: 'pending',
  data: {} as IProduct,
  error: null
}

export const productReducer = createReducer(
  initialState,
  on(loadProduct, state => ({
    ...state,
    status: 'loading'
  })),
  on(loadProductSuccess, (state, payload) => ({
    ...state,
    status: 'success',
    data: payload.data,
    error: null
  })),
  on(loadProductFailure, (state, payload) => ({
    ...state,
    status: 'error',
    error: payload.error
  }))
)