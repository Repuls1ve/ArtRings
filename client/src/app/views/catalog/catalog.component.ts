import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { combineLatest } from 'rxjs'
import { CatalogDescriptions, CatalogInsertsOptions, CatalogPricesOptions, CatalogSortOptions, CatalogTags, CatalogTitles } from 'src/app/constants/catalog.constant'
import { IFilters } from 'src/app/interfaces/filters.interface'
import { IPaginationQuery } from 'src/app/interfaces/pagination.interface'
import { AppState } from 'src/app/store/app.state'
import { loadProducts } from 'src/app/store/catalog/catalog.actions'
import { selectCatalog } from 'src/app/store/catalog/catalog.selectors'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public catalog$ = this.store.select(selectCatalog)

  public readonly descriptions = CatalogDescriptions
  public readonly titles = CatalogTitles
  public readonly tags = CatalogTags

  public readonly sortOptions = CatalogSortOptions
  public readonly priceOptions = CatalogPricesOptions
  public readonly insertsOptions = CatalogInsertsOptions

  public inserts: IFilters['inserts'] = this.insertsOptions[0].value
  public sorting: IFilters['sorting'] = this.sortOptions[0].value
  public prices: IFilters['prices'] = this.priceOptions[0].value
  public category!: IFilters['category'] 
  public page!: number

  private filters!: IFilters

  constructor(
    public readonly media: MediaObserver,
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    combineLatest([this.route.queryParams, this.route.params]).subscribe(([queryParams, params]) => {
      this.page = queryParams['page']
      this.category = params['category']
      this.updateProducts()
    })
  }

  public selectPrices(event: any): void {
    this.prices = this.priceOptions.find(option => option.key === event.target.value)?.value
    this.changePage(1)
    this.updateProducts()
  }

  public selectSorting(event: any): void {
    this.sorting = this.sortOptions.find(option => option.key === event.target.value)?.value
    this.changePage(1)
    this.updateProducts()
  }

  public selectInserts(event: any): void {
    this.inserts = this.insertsOptions.find(option => option.key === event.target.value)?.value
    this.changePage(1)
    this.updateProducts()
  }

  public changePage(page: number): void {
    const queryParams: Params = { page }

    this.router.navigate(
      [], {
        relativeTo: this.route,
        queryParams: queryParams
    })
  }

  private updateProducts(): void {
    const pagination: IPaginationQuery = {
      page: this.page,
      limit: 9
    }
    this.filters = {
      category: this.category,
      prices: this.prices,
      inserts: this.inserts,
      sorting: this.sorting
    }
    this.store.dispatch(loadProducts({filters: this.filters, pagination}))
  }
}
