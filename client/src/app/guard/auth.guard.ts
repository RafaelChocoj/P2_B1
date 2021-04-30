import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogosService } from '../services/catalogos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  
  constructor(private authService: CatalogosService, private router: Router) { }
  
  canActivate(){

    if (this.authService.Logueado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;

    }
  }
  
}
