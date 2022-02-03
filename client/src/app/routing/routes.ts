import { Routes } from '@angular/router'
import { AboutComponent } from '../views/about/about.component'
import { CartComponent } from '../views/cart/cart.component'
import { CustomComponent } from '../views/custom/custom.component'
import { GuaranteesComponent } from '../views/guarantees/guarantees.component'
import { HomeComponent } from '../views/home/home.component'
import { NotFoundComponent } from '../views/not-found/not-found.component'
import { ShippingComponent } from '../views/shipping/shipping.component'
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
    path: '**',
    component: NotFoundComponent
  }
]