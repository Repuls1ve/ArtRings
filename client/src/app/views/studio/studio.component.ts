import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout'
import { StudioCarouselImages } from 'src/app/constants/carousel.constant'
import { StudioSliderImages } from 'src/app/constants/slider.constant'

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent {
  public readonly carousel = StudioCarouselImages
  public readonly slider = StudioSliderImages

  constructor(public readonly media: MediaObserver) {}
}
