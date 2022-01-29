import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ICart, ICartItem } from 'src/app/interfaces/cart.interface'

const mockCartItem: ICartItem = {
  _id: '',
  reviews: [],
  discount: null,
  rating: 4,
  identifier: '019',
  description: '',
  material: '',
  prices: {
    'RUB': 59600
  },
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
  total: {
    'RUB': 178800
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public cart: ICart = {
    items: [
      mockCartItem,
      mockCartItem
    ],
    summary: {
      'RUB': 268200
    }
  }

  constructor(public readonly media: MediaObserver) {}
}
