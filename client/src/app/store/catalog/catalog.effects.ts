import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { CatalogService } from 'src/app/services/catalog.service'
import { loadProducts, loadProductsFailure, loadProductsSuccess } from './catalog.actions'

@Injectable()
export class CatalogEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly catalogService: CatalogService
  ) {}

  public loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    switchMap(payload => this.catalogService.loadProducts(payload.filters, payload.pagination).pipe(
      map(data => loadProductsSuccess({products: data.products, meta: data.pagination})),
      catchError(error => of(loadProductsFailure({error: error.message})))
    ))
  ))
}
