import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router'
import { AllowedCategories } from '../constants/catalog.constant'

@Injectable({
  providedIn: 'root'
})
export class CatalogGuard implements CanActivate {
  constructor(private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const shouldRedirect = !AllowedCategories.includes(route.params['category']) || !Number(route.queryParams['page'])
    if (shouldRedirect) {
      return this.router.parseUrl('/catalog/wedding-rings?page=1')
    } else {
      return true
    }
  }
}
