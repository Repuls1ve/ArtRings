import { BadRequestException, CanActivate, ExecutionContext, forwardRef, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { isValidObjectId } from 'mongoose'
import { Observable, of, switchMap, throwError } from 'rxjs'
import { GuestsService } from 'src/guests/guests.service'
import { GuestCookiesKeys } from 'src/guests/interfaces/cookies.interface'

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(@Inject(forwardRef(() => GuestsService)) private readonly guests: GuestsService) {}

  public canActivate(context: ExecutionContext): Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    return this.validateRequest(request)
  }

  private validateRequest(request: any): Observable<boolean> {
    const uid = request.cookies[GuestCookiesKeys.UID]
    if (!isValidObjectId(uid) || !uid) throw new BadRequestException('Provided invalid uid format')
    return this.guests.isGuestExists(uid).pipe(
      switchMap(isExists => isExists ? of(true) : throwError(() => new NotFoundException('Guest with provided uid was not found')))
    )
  } 
}