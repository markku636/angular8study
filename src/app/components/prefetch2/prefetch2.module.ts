import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prefetch2RoutingModule } from './prefetch2-routing.module';
import { Prefetch2Component } from './prefetch2.component';

@NgModule({
  declarations: [
    Prefetch2Component
  ],
  imports: [
    CommonModule,
    Prefetch2RoutingModule
  ]
})
export class Prefetch2Module { }
