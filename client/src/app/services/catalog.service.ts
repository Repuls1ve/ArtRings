import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IFilters } from '../interfaces/filters.interface'
import { IPagination, IPaginationQuery } from '../interfaces/pagination.interface'
import { IResponse } from '../interfaces/response.interface'
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private readonly baseURL = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  public loadProducts(filters: IFilters, pagination: IPaginationQuery): Observable<{products: IProduct[]} & IPagination> {
    const { limit, page } = pagination
    const queryParams = { limit, page }

    return this.http.post<IResponse<{products: IProduct[]} & IPagination>>(this.baseURL + `products`, filters, {params: queryParams}).pipe(
      map(({data}) => data)
    )
  }
}
