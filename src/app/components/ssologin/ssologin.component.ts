import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/commons/data.service';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/commons/authority.service';

@Component({
  selector: 'app-ssologin',
  templateUrl: './ssologin.component.html',
  styleUrls: ['./ssologin.component.scss']
})
export class SSOLoginComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private authenticationService: AuthenticationService) { }


  ngOnInit() {
    let token = this.activeRoute.snapshot.queryParamMap.get("token")

    if (token) {
      this.authenticationService.ssologin(token)

    } else {
      // to do redirect
      alert("Warnning Illegal intruder!");
    }
  }
}
