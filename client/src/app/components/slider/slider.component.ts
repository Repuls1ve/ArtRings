import { Component, Input } from '@angular/core'

export interface ISliderImage {
  source: string
  alt: string
  breakpoints?: string[]
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() public images: ISliderImage[] = []

  public active = 0

  public isActive(image: ISliderImage): boolean {
    return this.active === this.images.indexOf(image)
  }

  public setActive(index: number): void {
    this.active = index    
  }

  public toSrcset(breakpoints: ISliderImage['breakpoints']): string | undefined {
    return breakpoints?.toString()
  }
}
