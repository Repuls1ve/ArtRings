import { Component, ContentChildren, QueryList } from '@angular/core'
import { CarouselItemComponent } from '../carousel-item/carousel-item.component'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @ContentChildren(CarouselItemComponent)
  public items!: QueryList<CarouselItemComponent>

  public toNext(): void {
    const visibles = this.visibleElements()
    const items = this.items.toArray()
    const lastVisibleIndex = items.indexOf(visibles[visibles.length - 1])
    if (lastVisibleIndex !== items.length - 1 && visibles.length) {
      const target = items[lastVisibleIndex + 1]
      this.scrollIntoView(target.elementRef.nativeElement)
    }
  }

  public toPrevious(): void {
    const visibles = this.visibleElements()
    const items = this.items.toArray()
    const firstVisibleIndex = items.indexOf(visibles[0])
    if (firstVisibleIndex !== 0 && visibles.length) {
      const target = items[firstVisibleIndex - 1]
      this.scrollIntoView(target.elementRef.nativeElement)
    }
  }

  public isNextDisabled(): boolean {
    return this.items.last.visible
  }

  public isPreviousDisabled(): boolean {
    return this.items.first.visible
  }

  private scrollIntoView(element: HTMLElement): void {
    element.scrollIntoView({behavior: 'smooth', block: 'nearest'})
  }

  private visibleElements(): CarouselItemComponent[] {
    return this.items.toArray().filter(item => item.visible)
  }
}
