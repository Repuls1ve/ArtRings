import { createAction, props } from '@ngrx/store'
import { IFilters } from 'src/app/interfaces/filters.interface'
import { IPagination, IPaginationQuery } from 'src/app/interfaces/pagination.interface'
import { IProduct } from 'src/app/models/product.model'
import { error } from '../app.reducers'

export const loadProducts = createAction(
  '[Catalog] Load Products',
  props<{filters: IFilters, pagination: IPaginationQuery}>()
)

export const loadProductsSuccess = createAction(
  '[Catalog] Load Products Success',
  props<{products: IProduct[], meta: IPagination['pagination']}>()
)

export const loadProductsFailure = createAction(
  '[Catalog] Load Products Failure',
  props<{error: error}>()
)