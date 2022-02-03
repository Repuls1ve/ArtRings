import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, filter, map, of, switchMap } from 'rxjs'
import { InitializationService } from 'src/app/services/initialization.service'
import { ViewedService } from 'src/app/services/viewed.service'
import { updateGuestMetrics } from '../guest/guest.actions'
import { addViewed, addViewedFailure, addViewedSuccess, clearViewed, clearViewedFailure, clearViewedSuccess, loadViewed, loadViewedFailure, loadViewedSuccess, removeViewed, removeViewedFailure, removeViewedSuccess } from './viewed.actions'

@Injectable()
export class ViewedEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly viewedService: ViewedService,
    private readonly initializationService: InitializationService
  ) {}

  public loadViewed$ = createEffect(() => this.actions$.pipe(
    ofType(loadViewed),
    switchMap(() => this.initializationService.initialized$.pipe(
      filter(Boolean),
      switchMap(() => this.viewedService.loadViewed().pipe(
        map(data => loadViewedSuccess({data}))
      )),
      catchError(error => of(loadViewedFailure({error: error.message})))
    ))
  ))

  public addViewed$ = createEffect(() => this.actions$.pipe(
    ofType(addViewed),
    switchMap(payload => this.viewedService.addViewed(payload.data).pipe(
      map(data => addViewedSuccess({data})),
      catchError(error => of(addViewedFailure({error: error.message})))
    ))
  ))

  public removeViewed$ = createEffect(() => this.actions$.pipe(
    ofType(removeViewed),
    switchMap(payload => this.viewedService.addViewed(payload.data).pipe(
      map(data => removeViewedSuccess({data})),
      catchError(error => of(removeViewedFailure({error: error.message})))
    ))
  ))

  public clearViewed$ = createEffect(() => this.actions$.pipe(
    ofType(clearViewed),
    switchMap(() => this.viewedService.clearViewed().pipe(
      map(data => clearViewedSuccess({data})),
      catchError(error => of(clearViewedFailure({error: error.message})))
    ))
  ))

  public updateMetrics$ = createEffect(() => this.actions$.pipe(
    ofType(loadViewedSuccess, addViewedSuccess, removeViewedSuccess, clearViewedSuccess),
    map(payload => updateGuestMetrics({data: payload.data.metrics}))
  ))
}