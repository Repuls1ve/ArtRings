import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from './store/app.state'
import { identifyGuest } from './store/guest/guest.actions'
import { loadViewed } from './store/viewed/viewed.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  public ngOnInit(): void {
    this.store.dispatch(identifyGuest())
    this.store.dispatch(loadViewed())
  }
}
