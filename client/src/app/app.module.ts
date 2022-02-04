import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HeaderComponent } from './components/header/header.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { SocialMediaComponent } from './components/social-media/social-media.component'
import { HomeComponent } from './views/home/home.component'
import { SliderComponent } from './components/slider/slider.component'
import { CarouselComponent } from './components/carousel/carousel.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { RatingComponent } from './components/rating/rating.component'
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component'
import { CustomComponent } from './views/custom/custom.component'
import { VisibilityDirective } from './directives/visibility.directive'
import { ButtonComponent } from './components/button/button.component'
import { CartComponent } from './views/cart/cart.component'
import { QuantityTogglerComponent } from './components/quantity-toggler/quantity-toggler.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { WishlistComponent } from './views/wishlist/wishlist.component'
import { AppStoreModule } from './store/app-store.module'
import { LoggingInterceptorProvider } from './interceptors/logging.interceptor'
import { PaginationComponent } from './components/pagination/pagination.component'
import { AboutComponent } from './views/about/about.component'
import { ShippingComponent } from './views/shipping/shipping.component'
import { GuaranteesComponent } from './views/guarantees/guarantees.component'
import { ContactsComponent } from './views/contacts/contacts.component'
import { AgmCoreModule } from '@agm/core'
import { environment } from 'src/environments/environment'
import { StudioComponent } from './views/studio/studio.component'
import { WearingComponent } from './views/wearing/wearing.component';
import { GiftComponent } from './views/gift/gift.component';
import { GiftDecorationComponent } from './components/gift-decoration/gift-decoration.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopBarComponent,
    SocialMediaComponent,
    HomeComponent,
    SliderComponent,
    CarouselComponent,
    ProductCardComponent,
    RatingComponent,
    CarouselItemComponent,
    VisibilityDirective,
    ButtonComponent,
    CustomComponent,
    CartComponent,
    QuantityTogglerComponent,
    NotFoundComponent,
    WishlistComponent,
    PaginationComponent,
    AboutComponent,
    ShippingComponent,
    GuaranteesComponent,
    ContactsComponent,
    StudioComponent,
    WearingComponent,
    GiftComponent,
    GiftDecorationComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: environment.GMApiKey}),
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [
    LoggingInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
