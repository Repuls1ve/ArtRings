import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Types, Model, QueryOptions, UpdateQuery, Document, FilterQuery } from 'mongoose'
import { catchError, from, map, Observable, of, switchMap } from 'rxjs'
import { ProductsService } from 'src/products/products.service'
import { ProductDocument } from 'src/products/schemas/product.schema'
import { UpdateGuestDto } from './dtos/update-guest.dto'
import { ICartItem, IGuest } from './interfaces/guest.interface'
import { Guest, GuestDocument } from './schemas/guest.schema'

@Injectable()
export class GuestsService {
  constructor(
    @InjectModel(Guest.name) private readonly guest: Model<GuestDocument>,
    private readonly products: ProductsService
  ) {}

  public identifyExistingGuest(id: GuestDocument['id']): Observable<IGuest['metrics']> {
    return from(this.guest.findById(id)).pipe(
      map(guest => this.getMetrics(guest))
    )
  }

  public identifyNewGuest(): Observable<Pick<GuestDocument, 'metrics' | 'id'>> {
    return this.createGuest().pipe(
      map(guest => ({
        metrics: this.getMetrics(guest),
        id: guest.id
      }))
    )
  }

  public getGuestCart(id: GuestDocument['id']): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    return from(this.guest.findById(id)).pipe(
      map(guest => ({
        cart: guest.cart,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public getGuestWishlist(id: GuestDocument['id']): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return from(this.guest.findById(id)).pipe(
      map(guest => ({
        wishlist: guest.wishlist,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public getGuestViewed(id: GuestDocument['id']): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return from(this.guest.findById(id)).pipe(
      map(guest => ({
        viewed: guest.viewed,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public guestCartAdd(
    id: GuestDocument['id'],
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    return from(this.products.getProduct(updateGuestDto.productId)).pipe(
      switchMap(product => from(this.guest.findById(id)).pipe(
        switchMap(guest => {
          const queryOptions: QueryOptions = { new: true }
          const cartItem = guest.cart.items.find(item => item['_id'].equals(product._id))
          if (!cartItem) {
            const newCartItem = this.toCartItem(product, 1)
            const updateQuery: UpdateQuery<GuestDocument> = {
              $push: { 'cart.items': newCartItem },
              $set: { 'cart.summary': guest.cart.items.map(item =>
                item.total).reduce((a, b) => a + b, 0) + product.price }
            }

            return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
              map(guest => ({
                cart: guest.cart,
                metrics: this.getMetrics(guest)
              }))
            )
          }
          const filterQuery: FilterQuery<GuestDocument> = {
            _id: id, 'cart.items._id': product._id
          }
          const updateQuery: UpdateQuery<GuestDocument> = {
            $set: {
              'cart.items.$': this.toCartItem(product, cartItem.quantity + 1),
              'cart.summary': guest.cart.items.map(item =>
                item.total).reduce((a, b) => a + b, 0) + product.price
            }
          }

          return from(this.guest.findOneAndUpdate(filterQuery, updateQuery, queryOptions)).pipe(
            map(guest => ({
              cart: guest.cart,
              metrics: this.getMetrics(guest)
            }))
          )
        })
      ))
    )
  }

  public guestCartRemove(
    id: GuestDocument['id'],
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    return from(this.products.getProduct(updateGuestDto.productId)).pipe(
      switchMap(product => from(this.guest.findById(id)).pipe(
        switchMap(guest => {
          const queryOptions: QueryOptions = { new: true }
          const cartItem = guest.cart.items.find(item => item['_id'].equals(product._id))

          if (!cartItem) {
            return of({
              cart: guest.cart,
              metrics: this.getMetrics(guest)
            })
          }

          if (cartItem.quantity <= 1) {
            const updateQuery: UpdateQuery<GuestDocument> = {
              $pull: { 'cart.items': { '_id': new Types.ObjectId(updateGuestDto.productId) } },
              $set: { 'cart.summary': guest.cart.items.map(item =>
                item.total).reduce((a, b) => a + b, 0) - product.price
              }
            }

            return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
              map(guest => ({
                cart: guest.cart,
                metrics: this.getMetrics(guest)
              }))
            )
          }
          else {
            const filterQuery: FilterQuery<GuestDocument> = {
              _id: id, 'cart.items._id': new Types.ObjectId(updateGuestDto.productId)
            }
            const updateQuery: UpdateQuery<GuestDocument> = {
              $set: {
                'cart.items.$': this.toCartItem(product, cartItem.quantity - 1),
                'cart.summary': guest.cart.items.map(item =>
                  item.total).reduce((a, b) => a + b, 0) - product.price
              }
            }

            return from(this.guest.findOneAndUpdate(filterQuery, updateQuery, queryOptions)).pipe(
              map(guest => ({
                cart: guest.cart,
                metrics: this.getMetrics(guest)
              }))
            )
          }
        })
      ))
    )
  }

  public guestCartClear(id: GuestDocument['id']): Observable<Pick<IGuest, 'cart' | 'metrics'>> {
    const queryOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'cart.items': [], 'cart.summary': 0 }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
      map(guest => ({
        cart: guest.cart,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public guestWishlistAdd(
    id: GuestDocument['id'],
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    return from(this.products.getProduct(updateGuestDto.productId)).pipe(
      switchMap(product => {
        const queryOptions: QueryOptions = { new: true }
        const updateQuery: UpdateQuery<GuestDocument> = {
          $push: { 'wishlist.items': product}
        }

        return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
          map(guest => ({
            wishlist: guest.wishlist,
            metrics: this.getMetrics(guest)
          }))
        )
      })
    )
  }

  public guestWishlistRemove(
    id: GuestDocument['id'], 
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    const queryOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $pull: { 'wishlist.items': { '_id': new Types.ObjectId(updateGuestDto.productId) } }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
      map(guest => ({
        wishlist: guest.wishlist,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public guestWishlistClear(id: GuestDocument['id']): Observable<Pick<IGuest, 'wishlist' | 'metrics'>> {
    const queryOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'wishlist.items': [] }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
      map(guest => ({
        wishlist: guest.wishlist,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public guestViewedAdd(
    id: GuestDocument['id'],
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    return from(this.products.getProduct(updateGuestDto.productId)).pipe(
      switchMap(product => {
        const queryOptions: QueryOptions = { new: true }
        const updateQuery: UpdateQuery<GuestDocument> = {
          $push: { 'viewed.items': product}
        }

        return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
          map(guest => ({
            viewed: guest.viewed,
            metrics: this.getMetrics(guest)
          }))
        )
      })
    )
  }

  public guestViewedRemove(
    id: GuestDocument['id'],
    updateGuestDto: UpdateGuestDto
  ): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    const queryOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $pull: { 'viewed.items': { '_id': new Types.ObjectId(updateGuestDto.productId) } }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
      map(guest => ({
        viewed: guest.viewed,
        metrics: this.getMetrics(guest)
      }))
    )
  }
  
  public guestViewedClear(id: GuestDocument['id']): Observable<Pick<IGuest, 'viewed' | 'metrics'>> {
    const queryOptions: QueryOptions = { new: true }
    const updateQuery: UpdateQuery<GuestDocument> = {
      $set: { 'viewed.items': [] }
    }

    return from(this.guest.findByIdAndUpdate(id, updateQuery, queryOptions)).pipe(
      map(guest => ({
        viewed: guest.viewed,
        metrics: this.getMetrics(guest)
      }))
    )
  }

  public isGuestExists(id: GuestDocument['id']): Observable<boolean> {
    return from(this.guest.exists({_id: id}))
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
        summary: 0
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

  private getMetrics(guest: GuestDocument): IGuest['metrics'] {
    return {
      cart: guest.cart.items.map(item => item.quantity).reduce((a, b) => a + b, 0),
      wishlist: guest.wishlist.items.length,
      viewed: guest.viewed.items.length,
      activity: Date.now()
    }
  }

  private toCartItem(document: ProductDocument, quantity: ICartItem['quantity']): ICartItem & Document['_id'] {
    const product = document.toJSON()
    return {
      ...product,
      quantity: quantity,
      total: product.price * quantity,
    }
  }
}
