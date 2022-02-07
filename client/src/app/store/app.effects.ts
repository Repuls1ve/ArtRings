import { CartEffects } from './cart/cart.effects'
import { CatalogEffects } from './catalog/catalog.effects'
import { GuestEffects } from './guest/guest.effects'
import { ViewedEffects } from './viewed/viewed.effects'
import { WishlistEffects } from './wishlist/wishlist.effects'

export const AppEffects = [
  GuestEffects,
  CartEffects,
  WishlistEffects,
  ViewedEffects,
  CatalogEffects
]