// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
// import { Observable } from 'rxjs';

// import { ProductComponent } from '../components/product/product.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class FocusGuard implements CanDeactivate<ProductComponent> {
//   canDeactivate(component: ProductComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//     if(component.isFocus())
//     {
//       return true;
//     }else{
//       return window.confirm("不關注就離開")
//     }    
//   }
  
// }
