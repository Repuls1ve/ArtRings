import { Routes } from '@angular/router'
import { CatalogGuard } from '../guards/catalog.guard'
import { AboutComponent } from '../views/about/about.component'
import { CartComponent } from '../views/cart/cart.component'
import { CatalogComponent } from '../views/catalog/catalog.component'
import { ContactsComponent } from '../views/contacts/contacts.component'
import { CustomComponent } from '../views/custom/custom.component'
import { GiftComponent } from '../views/gift/gift.component'
import { GuaranteesComponent } from '../views/guarantees/guarantees.component'
import { HomeComponent } from '../views/home/home.component'
import { NotFoundComponent } from '../views/not-found/not-found.component'
import { PrivacyComponent } from '../views/privacy/privacy.component'
import { ProductComponent } from '../views/product/product.component'
import { ShippingComponent } from '../views/shipping/shipping.component'
import { StudioComponent } from '../views/studio/studio.component'
import { WearingComponent } from '../views/wearing/wearing.component'
import { WishlistComponent } from '../views/wishlist/wishlist.component'

export enum RoutesPaths {
  Home = '',
  Custom = 'custom',
  About = 'about',
  Cart = 'cart',
  Wishlist = 'wishlist',
  Shipping = 'shipping',
  Guarantees = 'guarantees',
  Contacts = 'contacts',
  Studio = 'studio',
  Wearing = 'wearing',
  Gift = 'gift',
  Privacy = 'privacy',
  Catalog = 'catalog',
  Product = 'product',
  NotFound = '**'
}

export const routes: Routes = [
  {
    path: RoutesPaths.Home,
    component: HomeComponent
  },
  {
    path: RoutesPaths.Custom,
    component: CustomComponent
  },
  {
    path: RoutesPaths.About,
    component: AboutComponent
  },
  {
    path: RoutesPaths.Cart,
    component: CartComponent
  },
  {
    path: RoutesPaths.Wishlist,
    component: WishlistComponent
  },
  {
    path: RoutesPaths.Shipping,
    component: ShippingComponent
  },
  {
    path: RoutesPaths.Guarantees,
    component: GuaranteesComponent
  },
  {
    path: RoutesPaths.Contacts,
    component: ContactsComponent
  },
  {
    path: RoutesPaths.Studio,
    component: StudioComponent
  },
  {
    path: RoutesPaths.Wearing,
    component: WearingComponent
  },
  {
    path: RoutesPaths.Gift,
    component: GiftComponent
  },
  {
    path: RoutesPaths.Privacy,
    component: PrivacyComponent
  },
  {
    path: RoutesPaths.Catalog + '/:category',
    component: CatalogComponent,
    canActivate: [CatalogGuard]
  },
  {
    path: RoutesPaths.Product + '/:id',
    component: ProductComponent
  },
  {
    path: RoutesPaths.NotFound,
    component: NotFoundComponent
  }
]