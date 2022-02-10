import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { selectCartQuantity } from 'src/app/store/cart/cart.selectors'
import { selectWishlistQuantity } from 'src/app/store/wishlist/wishlist.selectors'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly wishlistQty$ = this.store.select(selectWishlistQuantity)
  public readonly cartQty$ = this.store.select(selectCartQuantity)
  public navbarClosed = true

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>  
  ) {}

  toggleNavbar(): void {
    this.navbarClosed = !this.navbarClosed
  }
}
