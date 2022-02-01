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
export class CartService {
  private readonly baseURL = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  public loadCart(): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    const options = { withCredentials: true }

    return this.http.get<IResponse<Pick<IGuest, 'cart' | 'metrics'>>>(this.baseURL + 'guests/cart', options).pipe(
      map(({data}) => data)
    )
  }

  public addProduct(id: IProduct['_id']): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    const options = { withCredentials: true }

    return this.http.get<IResponse<Pick<IGuest, 'cart' | 'metrics'>>>(this.baseURL + 'guests/cart/add', options).pipe(
      map(({data}) => data)
    )
  }

  public removeProduct(id: IProduct['_id']): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    const options = { withCredentials: true }

    return this.http.get<IResponse<Pick<IGuest, 'cart' | 'metrics'>>>(this.baseURL + 'guests/cart/remove', options).pipe(
      map(({data}) => data)
    )
  }

  public clearCart(): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    const options = { withCredentials: true }

    return this.http.get<IResponse<Pick<IGuest, 'cart' | 'metrics'>>>(this.baseURL + 'guests/cart/clear', options).pipe(
      map(({data}) => data)
    )
  }
}
