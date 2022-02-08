import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IResponse } from '../interfaces/response.interface'
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseURL = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  public loadProduct(id: IProduct['_id']): Observable<IProduct> {
    return this.http.get<IResponse<IProduct>>(this.baseURL + `products/one/${id}`).pipe(
      map(({data}) => data)
    )
  }
}
