import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(public readonly media: MediaObserver) {}
}
