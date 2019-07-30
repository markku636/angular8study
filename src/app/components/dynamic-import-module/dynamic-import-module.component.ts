import { Component, OnInit, Compiler } from '@angular/core';

@Component({
  selector: 'app-dynamic-import-module',
  templateUrl: './dynamic-import-module.component.html',
  styleUrls: ['./dynamic-import-module.component.scss']
})
export class DynamicImportModuleComponent implements OnInit {

  lazyModuleFactory: any;
  lazyComponent: any;
  

  constructor(private compiler: Compiler) { }

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
