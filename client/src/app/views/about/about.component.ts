import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public readonly media: MediaObserver) {}
}
