import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../shared/services/search-service.service';

@Injectable({
  providedIn: 'root',
})
export class SearchArticleGuard implements CanActivate {
  constructor(
    private router: Router,
    private searchService: SearchServiceService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // return true;
    if (this.searchService.hasBeenSearched) return true;
    return this.router.createUrlTree(['']);
  }
}
