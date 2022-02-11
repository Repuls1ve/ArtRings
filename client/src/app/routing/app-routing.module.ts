import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule } from '@angular/router'
import { routes } from './routes'

const extraOptions: ExtraOptions = { scrollPositionRestoration: 'enabled' }

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
