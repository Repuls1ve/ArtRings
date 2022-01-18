import { Component, Input } from '@angular/core'

export interface ICarouselImage {
  source: string
  alt: string
  breakpoints?: string[]
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() public images: ICarouselImage[] = []

  public active = 0

  public isActive(image: ICarouselImage): boolean {
    return this.active === this.images.indexOf(image)
  }

  public setActive(index: number): void {
    this.active = index    
  }

  public toSrcset(breakpoints: ICarouselImage['breakpoints']): string | undefined {
    return breakpoints?.toString()
  }
}
