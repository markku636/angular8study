import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Prefetch1RoutingModule } from './prefetch1-routing.module';
import { Prefetch1Component } from './prefetch1.component';


@NgModule({
  declarations: [
    Prefetch1Component
  ],
  imports: [
    CommonModule,
    Prefetch1RoutingModule
  ]
})
export class Prefetch1Module { }
