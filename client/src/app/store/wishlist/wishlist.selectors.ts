import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { WishlistState } from './wishlist.reducer'

export const wishlistFeature = (state: AppState) => state.wishlist

export const selectWishlist = createSelector(
  wishlistFeature,
  (state: WishlistState) => state
)