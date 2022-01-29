import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { GuestService } from 'src/app/services/guest.service'
import { identifyGuest, identifyGuestFailure, identifyGuestSuccess } from './guest.actions'

@Injectable()
export class GuestEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly guestService: GuestService
  ) {}

  public identifyGuest$ = createEffect(() => this.actions$.pipe(
    ofType(identifyGuest),
    switchMap(() => this.guestService.identifyGuest().pipe(
      map(payload => identifyGuestSuccess({data: payload})),
      catchError(error => of(identifyGuestFailure(error)))
    ))
  ))
}