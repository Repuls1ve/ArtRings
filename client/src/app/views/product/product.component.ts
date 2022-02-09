import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { loadProduct } from 'src/app/store/product/product.actions'
import { selectProduct } from 'src/app/store/product/product.selectors'

type branch = 'description' | 'reviews'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public readonly product$ = this.store.select(selectProduct)
  public branch: branch = 'description'

  constructor(
    public readonly media: MediaObserver,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.store.dispatch(loadProduct({id: params['id']}))
    )
  }

  public setBranch(branch: branch): void {
    this.branch = branch
  }
}
