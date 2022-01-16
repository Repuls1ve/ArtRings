import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public navbarClosed = true

  constructor(public readonly media: MediaObserver) {}

  toggleNavbar(): void {
    this.navbarClosed = !this.navbarClosed
  }
}
