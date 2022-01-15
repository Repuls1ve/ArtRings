import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './routing/app-routing.module'
import { AppComponent } from './app.component'
import { FooterComponent } from './components/footer/footer.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HeaderComponent } from './components/header/header.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { SocialMediaComponent } from './components/social-media/social-media.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopBarComponent,
    SocialMediaComponent
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
