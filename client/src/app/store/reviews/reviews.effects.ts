import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { ReviewsService } from 'src/app/services/reviews.service'
import { loadProductSuccess } from '../product/product.actions'
import { loadViewed } from '../viewed/viewed.actions'
import { addReview, addReviewFailure, addReviewSuccess } from './reviews.actions'

@Injectable()
export class ReviewsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly reviewsService: ReviewsService
  ) {}

  public addReview$ = createEffect(() => this.actions$.pipe(
    ofType(addReview),
    switchMap(payload => this.reviewsService.addReview(payload).pipe(
      map(data => addReviewSuccess({data})),
      catchError(error => of(addReviewFailure({error: error.message})))
    ))
  ))

  public updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(addReviewSuccess),
    map(payload => loadProductSuccess({data: payload.data}))
  ))

  public updateViewed$ = createEffect(() => this.actions$.pipe(
    ofType(addReviewSuccess),
    map(() => loadViewed())
  ))
}
