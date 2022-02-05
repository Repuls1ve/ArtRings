import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { Store } from '@ngrx/store'
import { IProduct } from 'src/app/models/product.model'
import { AppState } from 'src/app/store/app.state'
import { addProduct, clearCart, loadCart, removeProduct } from 'src/app/store/cart/cart.actions'
import { selectCart } from 'src/app/store/cart/cart.selectors'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart$ = this.store.select(selectCart)

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>  
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCart())
  }

  public addProduct(id: IProduct['_id']): void {
    this.store.dispatch(addProduct({data: id}))
  }

  public removeProduct(id: IProduct['_id']): void {
    this.store.dispatch(removeProduct({data: id}))
  }

  public clearCart(): void {
    this.store.dispatch(clearCart())
  }
}
