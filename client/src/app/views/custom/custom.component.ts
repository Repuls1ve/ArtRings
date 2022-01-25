import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { CustomCarouselImages } from 'src/app/constants/carousel.constant'
import { CustomSliderImages } from 'src/app/constants/slider.constant'

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent {
  public readonly carousel = CustomCarouselImages
  public readonly slider = CustomSliderImages

  constructor(public readonly media: MediaObserver) {}
}
