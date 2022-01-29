import { ICart } from '../interfaces/cart.interface'
import { IViewed } from '../interfaces/viewed.interface'
import { IWishlist } from '../interfaces/wishlist.interface'

export interface IGuest {
  uid: string
  wishlist: IWishlist
  viewed: IViewed
  cart: ICart
  activity: number
}