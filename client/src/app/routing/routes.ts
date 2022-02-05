import { Routes } from '@angular/router'
import { AboutComponent } from '../views/about/about.component'
import { CartComponent } from '../views/cart/cart.component'
import { ContactsComponent } from '../views/contacts/contacts.component'
import { CustomComponent } from '../views/custom/custom.component'
import { GiftComponent } from '../views/gift/gift.component'
import { GuaranteesComponent } from '../views/guarantees/guarantees.component'
import { HomeComponent } from '../views/home/home.component'
import { NotFoundComponent } from '../views/not-found/not-found.component'
import { PrivacyComponent } from '../views/privacy/privacy.component'
import { ShippingComponent } from '../views/shipping/shipping.component'
import { StudioComponent } from '../views/studio/studio.component'
import { WearingComponent } from '../views/wearing/wearing.component'
import { WishlistComponent } from '../views/wishlist/wishlist.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'guarantees',
    component: GuaranteesComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'studio',
    component: StudioComponent
  },
  {
    path: 'wearing',
    component: WearingComponent
  },
  {
    path: 'gift',
    component: GiftComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]