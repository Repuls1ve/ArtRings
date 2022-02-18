import { Component, OnDestroy, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { NavigationEnd, Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { filter, Subscription } from 'rxjs'
import { AppState } from 'src/app/store/app.state'
import { selectGuest } from 'src/app/store/guest/guest.selectors'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = []

  public readonly guest$ = this.store.select(selectGuest)
  public navbarClosed = true

  constructor(
    public readonly media: MediaObserver,
    private readonly store: Store<AppState>,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    const subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.closeNavbar())
    this.subscriptions.push(subscription)
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => 
      subscription.unsubscribe()
    )
  }

  public closeNavbar(): void {
    this.navbarClosed = true
  }

  public openNavbar(): void {
    this.navbarClosed = false
  }
}
