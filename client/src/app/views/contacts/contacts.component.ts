import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ContactsCarouselImages } from 'src/app/constants/carousel.constant'
import { MapStyles } from 'src/app/constants/map-styles.constant'
import { ContactsSliderImages } from 'src/app/constants/slider.constant'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public readonly styles = MapStyles
  public readonly carousel = ContactsCarouselImages
  public readonly slider = ContactsSliderImages

  constructor(public readonly media: MediaObserver) {}
}
