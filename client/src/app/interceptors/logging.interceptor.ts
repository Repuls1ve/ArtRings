import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http'
import { finalize, Observable, tap } from 'rxjs'

type status = 'succeded' | 'error'

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  private elapsed!: number
  private status!: status

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const nowTime = Date.now()

    return next.handle(request).pipe(
      tap({
        next: () => this.status = 'succeded',
        error: () => this.status = 'error'
      }),
      finalize(() => {  
        this.elapsed = Date.now() - nowTime
        console.warn(`${request.method} ${request.urlWithParams} ${this.status} in ${this.elapsed}ms`)
      })
    )
  }
}

export const LoggingInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
]
