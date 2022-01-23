import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { HomeSliderImages } from 'src/app/constants/slider.constant'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly slider = HomeSliderImages

  constructor(public readonly media: MediaObserver) {}
}
