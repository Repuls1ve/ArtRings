import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

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
import { RatingComponent } from './components/rating/rating.component';
import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { VisibilityDirective } from './directives/visibility.directive'

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
    VisibilityDirective
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
