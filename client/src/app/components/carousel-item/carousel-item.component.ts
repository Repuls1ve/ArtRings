import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  public visible!: boolean

  constructor(public readonly elementRef: ElementRef<HTMLElement>) {}

  public onVisibilityChange(visible: boolean): void {
    this.visible = visible
  }
}
