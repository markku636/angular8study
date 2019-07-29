import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Select2DemoComponent } from './components/shared/select2/select2-demo/select2-demo.component';
import { PromissionguardGuard } from './guard/promissionguard.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CampaignComponent } from './components/campaign/campaign.component';
import { DefaultLayoutComponent } from './components/shared/layouts/default-layout/default-layout.component';
import { UserComponent } from './components/user/user.component';
import { SSOLoginComponent } from './components/ssologin/ssologin.component';
import { SleepPreloadingStrategy } from './preloading/sleep.preloading.strategy';
import { RoutePreloadingStrategy } from './preloading/route.preloading.strategy';
import { QuicklinkStrategy } from './preloading/quick-link';
import { TodoComponent } from './components/todo/todo.component';

// export function loadSevenStarModule(): any {
//   return new Promise((resolve, reject) => {
//       (require as any).ensure([], (require: any) => {
//           resolve(require('./sevenStar/seven-star.module.ngfactory')['SevenStarModuleNgFactory']);
//       }, () => {
//           reject({ loadChunkError: true });
//       }, 'sevenStar');
//   });
// }



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'ssologin', component: SSOLoginComponent },
  {
    path: 'bms', component: DefaultLayoutComponent, canActivate: [PromissionguardGuard], children: [
      { path: 'campaign', component: CampaignComponent },
      { path: 'select2Demo', component: Select2DemoComponent },
      { path: 'user', component: UserComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'lazyload',   
      loadChildren : () => import('././components/lazyload/lazyload.module').then(mod => mod.LazyloadModule),
      data:{ preload:true }
      // loadChildren: './components/lazyload/lazyload.module#LazyloadModule' // before angular 7 
      }
    ]
  },



  { path: 'prefixtest', redirectTo: '/user', pathMatch: "prefix" },
  { path: 'notfound', component: PageNotFoundComponent, data:{ preload:true } }
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
