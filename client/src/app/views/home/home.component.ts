import { Component } from '@angular/core'
import { HomeCarouselImages } from 'src/app/constants/carousel.constant'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public readonly carousel = HomeCarouselImages
}
