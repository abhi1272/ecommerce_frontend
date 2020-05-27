import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this.authservice.isAutinticated()
        .then(
          (authinticated: boolean) => {
            if (authinticated) {
              return true;
            } else {
              this.router.navigate(['/home']);
            }
          }
        );
    }

}
