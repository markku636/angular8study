import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazyload1RoutingModule } from './lazyload1-routing.module';
import { Lazyload1Component } from './lazyload1.component';


@NgModule({
  declarations: [Lazyload1Component],
  imports: [
    CommonModule,
    Lazyload1RoutingModule
  ],
  entryComponents: [Lazyload1Component]

})
export class Lazyload1Module { 
  static EntryComponent = Lazyload1Component;
}
