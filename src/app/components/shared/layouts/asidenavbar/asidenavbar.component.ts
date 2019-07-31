import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/definitions/model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.scss']
})
export class AsidenavbarComponent implements OnInit {
  currentMenuId: number = 0
  menus: Array<Menu>

  constructor(private router: Router ,private activeRouter:ActivatedRoute) {

  }

  
  ngOnInit() {
    this.menus = [      
      new Menu(1, 'Campaign Manager', '/bms/campaign', "fa fa-user fa-1x"),
      new Menu(2, 'Lazy loading Module', '/bms/lazyload', "fa fa-user fa-1x"),
      new Menu(3, 'Dynamic Import Module', '/bms/dynamic-import', "fa fa-user fa-1x"),
      // new Menu(2, 'DemoSelect', '/bms/select2Demo', "fa fa-pinterest fa-1x"),
      // new Menu(3, 'User', '/bms/user', "fa fa-user fa-1x"),      
      // new Menu(4, 'Preload vs Prefetch', '/bms/user', "fa fa-user fa-1x"),

      new Menu(5, 'Prefetch Load Module', '/bms/prefetch', "fa fa-user fa-1x"),
      // new Menu(6, 'Client Side Cache', '/bms/client-side-cache', "fa fa-user fa-1x"),
      new Menu(7, 'Prue Pipe', '/bms/pipe', "fa fa-user fa-1x"),
      // new Menu(8, 'HttpRequest Cache', '/bms/user', "fa fa-user fa-1x"),      

    ]
        
    var self = this;
    this.menus.forEach(function (item) {
      if (self.router.url === item.url) {
        self.currentMenuId = item.id;
      }
    })
  }

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.url);
    this.currentMenuId = menu.id;
  }

}
