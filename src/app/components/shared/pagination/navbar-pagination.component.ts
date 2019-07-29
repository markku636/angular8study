import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel } from 'src/app/definitions/model';
import { DataService } from 'src/app/commons/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import express from 'express';

@Component({
  selector: 'app-navbar-pagination',
  templateUrl: './navbar-pagination.component.html',
  styleUrls: ['./navbar-pagination.component.scss']
})
export class NavbarPaginationComponent implements OnInit {
  

  
  @Input()
  setPageSize :any

  @Input()
  setPageIndex :any
  
  @Input()
  getData:any

  @Input()
  getQueryParameter:any
  
  @Input()
  set_pageNumArray :any
      
  @Input()
  pageModel:PageModel<any>

  constructor(private dataService:DataService,private location: Location) { }


  ngOnInit() {   
    
  }

}
