import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IResponse } from '../interfaces/response.interface'
import { IGuest } from '../models/guest.model'
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly baseURL = environment.baseURL
  private readonly options = { withCredentials: true }

  constructor(private readonly http: HttpClient) {}

  public loadWishlist(): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return this.http.get<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>>(this.baseURL + 'guests/wishlist', this.options).pipe(
      map(({data}) => data)
    )
  }

  public addWished(id: IProduct['_id']): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>>(this.baseURL + `guests/wishlist/add/${id}`, null, this.options).pipe(
      map(({data}) => data)
    )
  }

  public removeWished(id: IProduct['_id']): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>>(this.baseURL + `guests/wishlist/remove/${id}`, null, this.options).pipe(
      map(({data}) => data)
    )
  }

  public clearWishlist(): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>>(this.baseURL + 'guests/wishlist/clear', null, this.options).pipe(
      map(({data}) => data)
    )
  }
}
