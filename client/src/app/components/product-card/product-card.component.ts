import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { RoutesPaths } from 'src/app/routing/routes'
import { AppState } from 'src/app/store/app.state'
import { addWished, removeWished } from 'src/app/store/wishlist/wishlist.actions'
import { selectWishlist } from 'src/app/store/wishlist/wishlist.selectors'

const mockProduct: IProduct = {
  _id: '',
  category: 'wedding-rings',
  inserts: true,
  tags: [],
  reviews: [],
  discount: null,
  rating: 4,
  identifier: '019',
  descriptions: [''],
  material: '',
  price: 56900,
  production: 0,
  sizes: {
    female: [],
    male: []
  },
  stock: true,
  images: [
    {
      source: '/assets/img/product-image.png',
      alt: 'rings'
    },
    {
      source: '/assets/img/product-image.png',
      alt: 'rings'
    },
    {
      source: '/assets/img/product-image.png',
      alt: 'rings'
    }
  ]
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  public wishlist$ = this.store.select(selectWishlist)

  @Input()
  public product: IProduct = mockProduct

  @Input('rating.height.px')
  public ratingHeight = 18

  @Input('favourite.height.px')
  public favouriteHeight = 18

  @Input('price.fontSize.px')
  public priceFontSize = 16

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  public onWishedClick(wishlist: AppState['wishlist']): void {
    this.isWished(wishlist) ?
    this.store.dispatch(removeWished({data: this.product._id})) :
    this.store.dispatch(addWished({data: this.product._id}))
  }

  public onProductClick(): void {
    this.router.navigate([`/${RoutesPaths.Product}/${this.product._id}`])
  }

  public isWished(wishlist: AppState['wishlist']): boolean {
    return wishlist.data.items?.some(product => product._id === this.product._id)
  }
}
