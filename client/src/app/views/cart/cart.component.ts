import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { Store } from '@ngrx/store'
import { ICart, ICartItem } from 'src/app/models/guest.model'
import { AppState } from 'src/app/store/app.state'
import { loadCart } from 'src/app/store/cart/cart.actions'

const mockCartItem: ICartItem = {
  _id: '',
  reviews: [],
  discount: null,
  rating: 4,
  identifier: '019',
  description: '',
  material: '',
  price: 59600,
  production: 0,
  sizes: {
    female: [],
    male: []
  },
  stock: true,
  images: [
    {
      source: '/assets/img/product-image-2.png',
      alt: 'rings'
    },
    {
      source: '/assets/img/product-image-2.png',
      alt: 'rings'
    },
    {
      source: '/assets/img/product-image-2.png',
      alt: 'rings'
    }
  ],
  quantity: 3,
  total: 178800
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: ICart = {
    items: [
      mockCartItem,
      mockCartItem
    ],
    summary: 268200
  }

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>  
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCart())
  }
}
