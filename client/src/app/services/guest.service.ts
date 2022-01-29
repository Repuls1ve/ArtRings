import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IResponse } from '../interfaces/response.interface'
import { IGuest } from '../models/guest.model'

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly baseURL = environment.baseURL

  constructor(private readonly http: HttpClient) {}

  public identifyGuest(): Observable<IGuest['metrics']> {
    const options = { withCredentials: true }
    
    return this.http.get<IResponse<IGuest['metrics']>>(this.baseURL + 'guests/identify', options).pipe(
      map(({data}) => data)
    )
  }
}
