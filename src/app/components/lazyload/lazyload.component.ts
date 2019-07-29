import { Component, OnInit, Compiler } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent implements OnInit {

  constructor(private compiler: Compiler) { }

  lazyModuleFactory: any;
  lazyComponent: any;
  


  ngOnInit() {
  }

  dynamicLoadLazyloadModule1() {
    import('../lazyload1/lazyload1.module').then(
      loadedModule => {
        debugger;
        const lazyPageModule = loadedModule.Lazyload1Module;
        this.compiler.compileModuleAsync(lazyPageModule).then(moduleFactory => {
          this.lazyModuleFactory = moduleFactory;
          this.lazyComponent = lazyPageModule.EntryComponent;
        });
      })
  }

}
