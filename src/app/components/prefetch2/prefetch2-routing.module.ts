import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prefetch2Component } from './prefetch2.component';


const routes: Routes = [{
  path: "", 
  component: Prefetch2Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prefetch2RoutingModule { }
