import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, filter, map, of, switchMap } from 'rxjs'
import { InitializationService } from 'src/app/services/initialization.service'
import { WishlistService } from 'src/app/services/wishlist.service'
import { updateGuestMetrics } from '../guest/guest.actions'
import { addWished, addWishedFailure, addWishedSuccess, clearWishlist, clearWishlistFailure, clearWishlistSuccess, loadWishlist, loadWishlistFailure, loadWishlistSuccess, removeWished, removeWishedFailure, removeWishedSuccess } from './wishlist.actions'

@Injectable()
export class WishlistEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly wishlistService: WishlistService,
    private readonly initializationService: InitializationService
  ) {}

  public loadWishlist$ = createEffect(() => this.actions$.pipe(
    ofType(loadWishlist),
    switchMap(() => this.initializationService.initialized$.pipe(
      filter(Boolean),
      switchMap(() => this.wishlistService.loadWishlist().pipe(
        map(data => loadWishlistSuccess({data}))
      )),
      catchError(error => of(loadWishlistFailure({error: error.message})))
    ))
  ))

  public addWished$ = createEffect(() => this.actions$.pipe(
    ofType(addWished),
    switchMap(payload => this.wishlistService.addWished(payload.data).pipe(
      map(data => addWishedSuccess({data})),
      catchError(error => of(addWishedFailure({error: error.message})))
    ))
  ))

  public removeWished$ = createEffect(() => this.actions$.pipe(
    ofType(removeWished),
    switchMap(payload => this.wishlistService.addWished(payload.data).pipe(
      map(data => removeWishedSuccess({data})),
      catchError(error => of(removeWishedFailure({error: error.message})))
    ))
  ))

  public clearWishlist$ = createEffect(() => this.actions$.pipe(
    ofType(clearWishlist),
    switchMap(() => this.wishlistService.clearWishlist().pipe(
      map(data => clearWishlistSuccess({data})),
      catchError(error => of(clearWishlistFailure({error: error.message})))
    ))
  ))

  public updateMetrics$ = createEffect(() => this.actions$.pipe(
    ofType(loadWishlistSuccess, addWishedSuccess, removeWishedSuccess, clearWishlistSuccess),
    map(payload => updateGuestMetrics({data: payload.data.metrics}))
  ))
}