import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

type page = number | '...'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  public delta = 2

  @Input()
  public totalItems!: number

  @Input()
  public pageSize!: number

  @Input()
  public controlsName = true

  @Input()
  public page = 1

  @Output()
  public readonly pageChange = new EventEmitter<number>()

  public pagesRange!: page[]

  private currentPage!: number
  private totalPages!: number

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize)
    this.selectPage(this.page)
  }

  public selectPage(page: number): void {
    this.currentPage = page
    this.pageChange.emit(this.currentPage)
    this.pagesRange = this.generatePagesRange()
  }

  public selectNextPage(): void {
    this.selectPage(this.currentPage + 1)
  }

  public selectPreviousPage(): void {
    this.selectPage(this.currentPage - 1)
  }

  private generatePagesRange(): page[] {
    const range = [...Array(this.totalPages).keys()].map(i => i + 1)

    return range.reduce((pages: page[], page) => {
      if (page === 1 || page === this.totalPages) {
        return [...pages, page]
      }

      else if (page - this.delta <= this.currentPage && page + this.delta >= this.currentPage) {
        return [...pages, page]
      }

      else if (pages[pages.length - 1] !== '...') {
        return [...pages, '...']
      }

      return pages
    }, [])
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages
  }

  public isNumericPage(page: page): page is number {
    return typeof page === 'number'
  }

  public isCurrentPage(page: page): boolean {
    return page === this.currentPage
  }
}
