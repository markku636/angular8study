import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/commons/authority.service';
import { Router } from '@angular/router';

declare let Holder: any;

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    var myImage = document.getElementById('holder-logo');
    Holder.run({
      images: myImage
    });
  }

  logout() {

    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
