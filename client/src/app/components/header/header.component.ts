import { Component } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'
import { selectGuest } from 'src/app/store/guest/guest.selectors'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly guest$ = this.store.select(selectGuest)
  public navbarClosed = true

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>  
  ) {}

  toggleNavbar(): void {
    this.navbarClosed = !this.navbarClosed
  }
}
