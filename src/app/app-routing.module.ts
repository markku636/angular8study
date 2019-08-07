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
import { DynamicImportModuleComponent } from './components/dynamic-import-module/dynamic-import-module.component';
import { ClientSideCacheComponent } from './components/client-side-cache/client-side-cache.component';
import { PrefetchComponent } from './components/prefetch/prefetch.component';
import { ExcelExportComponent } from './components/excel-export/excel-export.component';

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
      { path: 'excelexport', component: ExcelExportComponent },      
      { path: 'lazyload',   
      loadChildren : () => import('././components/lazyload/lazyload.module').then(mod => mod.LazyloadModule),data:{ preload:true }
      // loadChildren: './components/lazyload/lazyload.module#LazyloadModule' // before angular 7 
      },    
      { path: 'dynamic-import', component: DynamicImportModuleComponent },
      { path: 'prefetch', component: PrefetchComponent },
      { path: 'prefetch1',   
      loadChildren : () => import('././components/prefetch1/prefetch1.module').then(mod => mod.Prefetch1Module), data:{ preload:true }      
      },
      { path: 'prefetch2',   
      loadChildren : () => import('././components/prefetch2/prefetch2.module').then(mod => mod.Prefetch2Module), data:{ preload:true }      
      },
      { path: 'dynamic-client-side-cache', component: ClientSideCacheComponent },
      { path: 'pipe', component: TodoComponent },        
               
    ]
  },



  { path: 'prefixtest', redirectTo: '/user', pathMatch: "prefix" },
  { path: 'notfound', component: PageNotFoundComponent, data:{ preload:true } }
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy:  QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
