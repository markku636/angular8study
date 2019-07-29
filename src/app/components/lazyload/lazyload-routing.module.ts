import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyloadComponent } from './lazyload.component';

const routes: Routes = [{
  path: "", //設定根目錄為這一層
  component: LazyloadComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadRoutingModule { }
