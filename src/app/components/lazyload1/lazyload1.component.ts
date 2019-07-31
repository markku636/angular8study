import { Component, OnInit } from '@angular/core';
import { SleepPreloadingStrategy } from '../../preloading/sleep.preloading.strategy';
import { RoutePreloadingStrategy } from '../../preloading/route.preloading.strategy';

@Component({
  selector: 'app-lazyload1',
  templateUrl: './lazyload1.component.html',
  styleUrls: ['./lazyload1.component.scss']
})
export class Lazyload1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var test:string = ""
    // hello world
    debugger;
  }

}
