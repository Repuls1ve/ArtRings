import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IResponse } from '../interfaces/response.interface'
import { IProduct, IProductReview } from '../models/product.model'

export interface AddReviewDto {
  id: IProduct['_id']
  review: IProductReview
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private readonly baseURL = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  public addReview(addReviewDto: AddReviewDto): Observable<IProduct> {
    const { review, id } = addReviewDto

    return this.http.patch<IResponse<IProduct>>(this.baseURL + `products/one/${id}/reviews/add`, review).pipe(
      map(({data}) => data)
    )
  }
}
