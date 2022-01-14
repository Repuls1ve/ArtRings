import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public readonly media: MediaObserver) {}
}
