import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-side-cache',
  templateUrl: './client-side-cache.component.html?v=${new Date().getTime()}',
  styleUrls: ['./client-side-cache.component.scss?v=${new Date().getTime()}']
})
export class ClientSideCacheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
