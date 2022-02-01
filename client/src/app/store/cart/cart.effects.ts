import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, filter, map, of, switchMap } from 'rxjs'
import { CartService } from 'src/app/services/cart.service'
import { InitializationService } from 'src/app/services/initialization.service'
import { updateGuestMetrics } from '../guest/guest.actions'
import { addProduct, addProductFailure, addProductSuccess, clearCart, clearCartFailure, clearCartSuccess, loadCart, loadCartFailure, loadCartSuccess, removeProduct, removeProductFailure, removeProductSuccess } from './cart.actions'

@Injectable()
export class CartEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: CartService,
    private readonly initializationService: InitializationService
  ) {}

  public loadCart$ = createEffect(() => this.actions$.pipe(
    ofType(loadCart),
    switchMap(() => this.initializationService.initialized$.pipe(
      filter(Boolean),
      switchMap(() => this.cartService.loadCart().pipe(
        map(data => loadCartSuccess({data})),
      )),
      catchError(error => of(loadCartFailure({error: error.message})))
    ))
  ))

  public addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(addProduct),
    switchMap(payload => this.cartService.addProduct(payload.data).pipe(
      map(data => addProductSuccess({data})),
      catchError(error => of(addProductFailure({error: error.message})))
    ))
  ))

  public removeProduct$ = createEffect(() => this.actions$.pipe(
    ofType(removeProduct),
    switchMap(payload => this.cartService.removeProduct(payload.data).pipe(
      map(data => removeProductSuccess({data})),
      catchError(error => of(removeProductFailure({error: error.message})))
    ))
  ))

  public clearCart$ = createEffect(() => this.actions$.pipe(
    ofType(clearCart),
    switchMap(() => this.cartService.clearCart().pipe(
      map(data => clearCartSuccess({data})),
      catchError(error => of(clearCartFailure({error: error.message})))
    ))
  ))

  public updateMetrics$ = createEffect(() => this.actions$.pipe(
    ofType(addProductSuccess, removeProductSuccess, clearCartSuccess, loadCartSuccess),
    map(payload => updateGuestMetrics({data: payload.data.metrics}))
  ))
}