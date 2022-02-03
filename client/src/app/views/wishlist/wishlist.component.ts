import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { clearWishlist, loadWishlist } from 'src/app/store/wishlist/wishlist.actions'
import { selectWishlist } from 'src/app/store/wishlist/wishlist.selectors'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public readonly wishlist$ = this.store.select(selectWishlist)
  public readonly pageSize = 4
  public page = 1

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>  
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadWishlist())
  }

  public clearWishlist(): void {
    this.store.dispatch(clearWishlist())
  }

  public onPageChange(page: number): void {
    this.page = page
  }
}
