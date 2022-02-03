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
export class ViewedService {
  private readonly baseURL = environment.baseURL
  private readonly options = { withCredentials: true }

  constructor(private readonly http: HttpClient) {}

  public loadViewed(): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return this.http.get<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>>(this.baseURL + 'guests/viewed', this.options).pipe(
      map(({data}) => data)
    )
  }

  public addViewed(id: IProduct['_id']): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>>(this.baseURL + `guests/viewed/add/${id}`, null, this.options).pipe(
      map(({data}) => data)
    )
  }

  public removeViewed(id: IProduct['_id']): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>>(this.baseURL + `guests/viewed/remove/${id}`, null, this.options).pipe(
      map(({data}) => data)
    )
  }

  public clearViewed(): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return this.http.patch<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>>(this.baseURL + 'guests/viewed/clear', null, this.options).pipe(
      map(({data}) => data)
    )
  }
}
