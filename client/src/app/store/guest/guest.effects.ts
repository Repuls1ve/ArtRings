import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, delay, last, map, of, retryWhen, switchMap, take, tap } from 'rxjs'
import { GuestService } from 'src/app/services/guest.service'
import { InitializationService } from 'src/app/services/initialization.service'
import { identifyGuest, identifyGuestFailure, identifyGuestSuccess } from './guest.actions'

@Injectable()
export class GuestEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly guestService: GuestService,
    private readonly initializationService: InitializationService
  ) {}

  public identifyGuest$ = createEffect(() => this.actions$.pipe(
    ofType(identifyGuest),
    switchMap(() => this.guestService.identifyGuest().pipe(
      tap(() => this.initializationService.completeInitialization()),
      map(payload => identifyGuestSuccess({data: payload})),
      retryWhen(error => error.pipe(
        delay(1000),
        take(3)
      )),
      last(),
      catchError(error => of(identifyGuestFailure({error: error.message})))
    ))
  ))
}