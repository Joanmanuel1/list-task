import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionService:AutenticacionService, private rutas:Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let currentUser=this.autenticacionService.UsuarioAutenticado;
      if(currentUser && currentUser.accessToken){
        return true;
      }
      else{
        this.rutas.navigate(['/ingresar']);
        return false;
      }


  }
  
}
