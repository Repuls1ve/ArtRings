import { Body, Controller, Get, Patch, Req, Res } from '@nestjs/common'
import { CookieOptions, Request, Response } from 'express'
import { map, Observable, switchMap, tap } from 'rxjs'
import { IResponse } from 'src/common/interceptors/transform.interceptor'
import { UpdateCartDto } from './dtos/update-cart.dto'
import { UpdateViewedDto } from './dtos/update-viewed.dto'
import { UpdateWishlistDto } from './dtos/update-wishlist.dto'
import { GuestsService } from './guests.service'
import { GuestCookiesKeys } from './interfaces/cookies.interface'
import { IGuest } from './interfaces/guest.interface'

@Controller('guests')
export class GuestsController {
  constructor(private readonly guests: GuestsService) {}

  @Get('identify')
  public identifyGuest(@Req() request: Request, @Res({passthrough: true}) response: Response): Observable<IResponse<IGuest['metrics']>> {
    const cookieOptions: CookieOptions = { httpOnly: true, secure: true }
    const uid = request.cookies[GuestCookiesKeys.UID]
    
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
  public getGuestCart(@Req() request: Request): Observable<IResponse<IGuest['cart']>> {
    const uid = request.cookies[GuestCookiesKeys.UID]
    
    return this.guests.getGuestCart(uid).pipe(
      map(data => ({data}))
    )
  }

  @Patch('cart/update')
  public updateGuestCart(@Req() request: Request, @Body() updateCartDto: UpdateCartDto): Observable<IResponse<Pick<IGuest, 'cart' | 'metrics'>>> {
    const uid = request.cookies[GuestCookiesKeys.UID]

    return this.guests.updateGuestCart(updateCartDto, uid).pipe(
      map(data => ({data}))
    )
  }

  @Patch('wishlist/update')
  public updateGuestWishlist(@Req() request: Request, @Body() updateWishlistDto: UpdateWishlistDto): Observable<IResponse<Pick<IGuest, 'wishlist' | 'metrics'>>> {
    const uid = request.cookies[GuestCookiesKeys.UID]

    return this.guests.updateGuestWishlist(updateWishlistDto, uid).pipe(
      map(data => ({data}))
    )
  }

  @Patch('viewed/update')
  public updateGuestViewed(@Req() request: Request, @Body() updateViewedDto: UpdateViewedDto): Observable<IResponse<Pick<IGuest, 'viewed' | 'metrics'>>> {
    const uid = request.cookies[GuestCookiesKeys.UID]

    return this.guests.updateGuestViewed(updateViewedDto, uid).pipe(
      map(data => ({data}))
    )
  }
}
