import { Component, Input } from '@angular/core'
import { IProduct } from 'src/app/models/product.model'

const mockProduct: IProduct = {
  _id: '',
  category: 'wedding-rings',
  inserts: true,
  tags: [],
  reviews: [],
  discount: null,
  rating: 4,
  identifier: '019',
  description: '',
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
  @Input()
  public product: IProduct = mockProduct

  @Input('rating.height.px')
  public ratingHeight = 18

  @Input('favourite.height.px')
  public favouriteHeight = 22

  @Input('price.fontSize.px')
  public priceFontSize = 16
}
