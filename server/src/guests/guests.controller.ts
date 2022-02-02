import { Controller, Get, Param, Patch, Res, UseGuards } from '@nestjs/common'
import { CookieOptions, Response } from 'express'
import { map, Observable, switchMap, tap } from 'rxjs'
import { Cookies } from 'src/common/decorators/cookies.decorator'
import { GuestGuard } from 'src/common/guards/guest.guard'
import { IResponse } from 'src/common/interceptors/transform.interceptor'
import { UpdateGuestDto } from './dtos/update-guest.dto'
import { GuestsService } from './guests.service'
import { GuestCookiesKeys } from './interfaces/cookies.interface'
import { IGuest } from './interfaces/guest.interface'
import { GuestDocument } from './schemas/guest.schema'

@Controller('guests')
export class GuestsController {
  constructor(private readonly guests: GuestsService) {}

  @Get('identify')
  public identifyGuest(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Res({passthrough: true}) response: Response
  ): Observable<IResponse<IGuest['metrics']>> {
    const cookieOptions: CookieOptions = { httpOnly: true, secure: true }
    
    return this.guests.isGuestExists(uid).pipe(
      switchMap(isExists => {
        return isExists ? 
        this.guests.identifyExistingGuest(uid).pipe(
          map(data => ({data, message: 'Existing Guest Identified'}))
        ) :
        this.guests.identifyNewGuest().pipe(
          tap(({id}) => response.cookie(GuestCookiesKeys.UID, id, cookieOptions)),
          map(({metrics}) => ({data: metrics, message: 'New Guest Identified'}))
        )
      })
    )
  }

  @Get('cart')
  @UseGuards(GuestGuard)
  public getGuestCart(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'cart' | 'metrics'>>> {
    return this.guests.getGuestCart(uid).pipe(map(data => ({data})))
  }

  @Get('wishlist')
  @UseGuards(GuestGuard)
  public getGuestWishlist(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>> {
    return this.guests.getGuestWishlist(uid).pipe(map(data => ({data})))
  }

  @Get('viewed')
  @UseGuards(GuestGuard)
  public getGuestViewed(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>> {
    return this.guests.getGuestViewed(uid).pipe(map(data => ({data})))
  }

  @Patch('cart/add/:productId')
  @UseGuards(GuestGuard)
  public guestCartAdd(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'cart' | 'metrics'>>> {
    return this.guests.guestCartAdd(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('cart/remove/:productId')
  @UseGuards(GuestGuard)
  public guestCartRemove(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'cart' | 'metrics'>>> {
    return this.guests.guestCartRemove(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('cart/clear')
  @UseGuards(GuestGuard)
  public guestCartClear(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'cart' | 'metrics'>>> {
    return this.guests.guestCartClear(uid).pipe(map(data => ({data})))
  }

  @Patch('wishlist/add/:productId')
  @UseGuards(GuestGuard)
  public guestWishlistAdd(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>> {
    return this.guests.guestWishlistAdd(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('wishlist/remove/:productId')
  @UseGuards(GuestGuard)
  public guestWishlistRemove(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>> {
    return this.guests.guestWishlistRemove(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('wishlist/clear')
  @UseGuards(GuestGuard)
  public guestWishlistClear(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>> {
    return this.guests.guestWishlistClear(uid).pipe(map(data => ({data})))
  }

  @Patch('viewed/add/:productId')
  @UseGuards(GuestGuard)
  public guestViewedAdd(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>> {
    return this.guests.guestViewedAdd(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('viewed/remove/:productId')
  @UseGuards(GuestGuard)
  public guestViewedRemove(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id'],
    @Param() updateGuestDto: UpdateGuestDto
  ): Observable<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>> {
    return this.guests.guestViewedRemove(uid, updateGuestDto).pipe(map(data => ({data})))
  }

  @Patch('viewed/clear')
  @UseGuards(GuestGuard)
  public guestViewedClear(
    @Cookies(GuestCookiesKeys.UID) uid: GuestDocument['id']
  ): Observable<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>> {
    return this.guests.guestViewedClear(uid).pipe(map(data => ({data})))
  }
}
