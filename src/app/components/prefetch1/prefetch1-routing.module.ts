import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Prefetch1Component } from './prefetch1.component';


const routes: Routes = [{
  path: "", 
  component: Prefetch1Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Prefetch1RoutingModule { }
