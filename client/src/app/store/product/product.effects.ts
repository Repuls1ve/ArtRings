import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { ProductService } from 'src/app/services/product.service'
import { loadProduct, loadProductFailure, loadProductSuccess } from './product.actions'

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductService
  ) {}

  public loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(loadProduct),
    switchMap(payload => this.productService.loadProduct(payload.id).pipe(
      map(data => loadProductSuccess({data})),
      catchError(error => of(loadProductFailure({error: error.message})))
    ))
  ))
}
