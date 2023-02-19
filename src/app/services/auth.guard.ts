import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      throw new Error('Method not implemented.');
   }
  
//   constructor(private authService: AuthService, private router: Router) {}

//    canActivate(
//    next: ActivatedRouteSnapshot,
//    state: RouterStateSnapshot): boolean | UrlTree {
//       let url: string = state.url;

//           return this.checkLogin(url);
//       }

//       checkLogin(url: string): true | UrlTree {
//          console.log("Url: " + url)
//          let val: string | null = localStorage.getItem('isUserLoggedIn');

//          if(val != null && val == "true"){
//             if(url == "")
//                return this.router.parseUrl('/shop');
//             else 
//                return true;
//          } else {
//             return this.router.parseUrl('');
//          }
//       }
}