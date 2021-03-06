import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './commons/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router, private sharedService: SharedService
  ) {

  }


  ngOnInit() {

  }


  ngOnDestroy(): void {
    document.body.className = '';
  }

}
