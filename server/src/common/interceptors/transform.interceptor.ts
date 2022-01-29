import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { map, Observable } from 'rxjs'

export interface IResponse<T> {
  message?: string
  data: T
}

export interface ApiResponse<T> extends IResponse<T> {
  statusCode: number
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map(data => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: data.message,
        data: data.data
      }))
    )
  }
}

export const TransformInterceptorProvider = {
  provide: APP_INTERCEPTOR,
  useClass: TransformInterceptor,
}
