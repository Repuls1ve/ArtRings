import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { isValidObjectId, Model, QueryOptions, UpdateQuery } from 'mongoose'
import { catchError, from, map, Observable, of, switchMap, tap } from 'rxjs'
import { UpdateCartDto } from './dtos/update-cart.dto'
import { UpdateViewedDto } from './dtos/update-viewed.dto'
import { UpdateWishlistDto } from './dtos/update-wishlist.dto'
import { IGuest } from './interfaces/guest.interface'
import { Guest, GuestDocument } from './schemas/guest.schema'

@Injectable()
export class GuestsService {
  constructor(@InjectModel(Guest.name) private readonly guest: Model<GuestDocument>) {}

  public identifyExistingGuest(id: GuestDocument['id']): Observable<IGuest['metrics']> {
    return from(this.guest.findById(id)).pipe(
      switchMap(guest => this.updateMetrics(guest.id).pipe(
        map(guest => guest.metrics)
      ))
    )
  }

  public identifyNewGuest(): Observable<Pick<GuestDocument, 'metrics' | 'id'>> {
    return this.createGuest().pipe(
      map(guest => ({
        metrics: guest.metrics,
        id: guest.id
      }))
    )
  }

  public getGuestCart(id: GuestDocument['id']): Observable<IGuest['cart']> {
    if (!isValidObjectId(id) || !id) throw new BadRequestException('Provided invalid uid')

    return from(this.guest.findById(id)).pipe(
      switchMap(guest => {
        if (!guest) throw new NotFoundException('Guest was not found')
        return this.updateMetrics(guest.id).pipe(
          map(guest => guest.cart)
        )
      })
    )
  }

  public updateGuestCart(updateCartDto: UpdateCartDto, id: GuestDocument['id']): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    if (!isValidObjectId(id) || !id) throw new BadRequestException('Provided invalid uid')

    const updateOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'cart': updateCartDto.cart }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, updateOptions)).pipe(
      switchMap(guest => {
        if (!guest) throw new NotFoundException('Guest was not found')
        return this.updateMetrics(guest.id).pipe(
          map(guest => ({
            cart: guest.cart,
            metrics: guest.metrics
          }))
        )
      })
    )
  }

  public updateGuestWishlist(updateWishlistDto: UpdateWishlistDto, id: GuestDocument['id']): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    if (!isValidObjectId(id) || !id) throw new BadRequestException('Provided invalid uid')

    const updateOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'wishlist': updateWishlistDto.wishlist }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, updateOptions)).pipe(
      switchMap(guest => {
        if (!guest) throw new NotFoundException('Guest was not found')
        return this.updateMetrics(guest.id).pipe(
          map(guest => ({
            wishlist: guest.wishlist,
            metrics: guest.metrics
          }))
        )
      })
    )
  }

  public updateGuestViewed(updateViewedDto: UpdateViewedDto, id: GuestDocument['id']): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    if (!isValidObjectId(id) || !id) throw new BadRequestException('Provided invalid uid')

    const updateOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'viewed': updateViewedDto.viewed }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, updateOptions)).pipe(
      switchMap(guest => {
        if (!guest) throw new NotFoundException('Guest was not found')
        return this.updateMetrics(guest.id).pipe(
          map(guest => ({
            viewed: guest.viewed,
            metrics: guest.metrics
          }))
        )
      })
    )
  }

  public isGuestExists(id: GuestDocument['id']): Observable<boolean> {
    return from(this.guest.findById(id)).pipe(
      map(guest => Boolean(guest)),
      catchError(() => of(false))
    )
  }

  public createGuest(): Observable<GuestDocument> {
    const initialGuest: IGuest = {
      metrics: {
        wishlist: 0,
        viewed: 0,
        cart: 0,
        activity: Date.now()
      },
      cart: {
        items: [],
        summary: {}
      },
      viewed: {
        items: []
      },
      wishlist: {
        items: []
      }
    }
    return from(this.guest.create(initialGuest))
  }

  private updateMetrics(id: GuestDocument['id']): Observable<GuestDocument> {
    if (!isValidObjectId(id) || !id) throw new BadRequestException('Provided invalid uid')

    return from(this.guest.findById(id)).pipe(
      switchMap(guest => {
        if (!guest) throw new NotFoundException('Guest was not found')
        const options: QueryOptions = { new: true }
        const updateQuery: UpdateQuery<GuestDocument> = {
          $set: { 
            'metrics.cart': guest.cart.items.length,
            'metrics.wishlist': guest.wishlist.items.length,
            'metrics.viewed': guest.viewed.items.length,
            'metrics.activity': Date.now()
          }
        }
        return from(this.guest.findByIdAndUpdate(guest.id, updateQuery, options))
      })
    )
  }
}
