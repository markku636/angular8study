import { Component, OnInit, Compiler } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent implements OnInit {

  constructor() { 


  }

  ngOnInit() {
    console.log('hello')
  } 
}
