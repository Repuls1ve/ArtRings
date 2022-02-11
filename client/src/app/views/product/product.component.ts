import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { AppState } from 'src/app/store/app.state'
import { addProduct, removeProduct } from 'src/app/store/cart/cart.actions'
import { selectCart } from 'src/app/store/cart/cart.selectors'
import { loadProduct } from 'src/app/store/product/product.actions'
import { selectProduct } from 'src/app/store/product/product.selectors'
import { addViewed } from 'src/app/store/viewed/viewed.actions'
import { selectViewed } from 'src/app/store/viewed/viewed.selectors'
import { addWished, removeWished } from 'src/app/store/wishlist/wishlist.actions'
import { selectWishlist } from 'src/app/store/wishlist/wishlist.selectors'

type branch = 'description' | 'reviews'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public readonly wishlist$ = this.store.select(selectWishlist)
  public readonly product$ = this.store.select(selectProduct)
  public readonly viewed$ = this.store.select(selectViewed)
  public readonly cart$ = this.store.select(selectCart)
  public branch: branch = 'description'

  constructor(
    public readonly media: MediaObserver,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(loadProduct({id: params['id']}))
      this.store.dispatch(addViewed({data: params['id']}))
    })
  }

  public setBranch(branch: branch): void {
    this.branch = branch
  }

  public onCartClick(id: IProduct['_id']): void {
    this.store.dispatch(addProduct({data: id}))
  }

  public onWishedClick(wishlist: AppState['wishlist'], id: IProduct['_id']): void {
    this.isWished(wishlist, id) ?
    this.store.dispatch(removeWished({data: id})) :
    this.store.dispatch(addWished({data: id}))
  }

  public isWished(wishlist: AppState['wishlist'], id: IProduct['_id']): boolean {
    return wishlist.data.items?.some(product => product._id === id)
  }
}
