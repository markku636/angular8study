import { Injectable, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/commons/data.service';
import { Location } from '@angular/common';
import { ConditionItem, PageModel } from 'src/app/definitions/model';

export class PaginationBase<T> {

  pageModel :PageModel<T> = new PageModel(); 

  constructor(protected router: Router, protected activeRoute: ActivatedRoute, protected dataService: DataService, protected location: Location) {

  }

  paginationInit() {
    if (this.pageModel.routeMode) {
      this.bindingRouteQueryString()
    }
    this.getData();
  }

  bindingRouteQueryString() {
    this.activeRoute.queryParams.subscribe((value) => {

      if (value['PageModel_pageIndex'] == null) {
        this.pageModel.pageIndex = 1;
      } else {
        this.pageModel.pageIndex = parseInt(value['PageModel_pageIndex']);
      }

      if (value['PageModel_pageSize'] != null) {
        this.pageModel.pageSize = parseInt(value['PageModel_pageSize']);
      }

      if (value['PageModel_orderByDirection'] != null) {
        this.pageModel.orderByDirection = value['PageModel_orderByDirection'];
      }

      if (value['PageModel_orderByField'] != null) {
        this.pageModel.orderByField = value['PageModel_orderByField'];
      }

      this.extraBindingQueryString();

    });
  }

  // should be override
  extraBindingQueryString() {

  }

  // should be override
  getData() {
    alert('please should be override getData')
  }


  setOrderBy(FieldName) {
    if (this.pageModel.orderByField == FieldName) {
      //如果傳入的欄位名稱==目前的排序欄位名稱
      //切換順排或逆排
      this.toggleDirection();
    }
    else {
      //傳入的欄位名稱與目前的排序欄位不同

      //設定排目前排序的欄位名稱
      this.pageModel.orderByField = FieldName;
      //預設為順排
      this.pageModel.orderByDirection = 'ASC';
    }
    //重新取得資料
    this.setPageIndex(this.pageModel.pageIndex);

  }

  //切換順排或逆排
  toggleDirection() {
    if (this.pageModel.orderByDirection == 'ASC') {
      this.pageModel.orderByDirection = 'DESC';
    }
    else {
      this.pageModel.orderByDirection = 'ASC';
    }
  }

  //順排逆排圖示
  getAscDescIcon(OrderField: string) {
    let sortClass: string = '';
    if (OrderField == this.pageModel.orderByField) {
      switch (this.pageModel.orderByDirection) {
        case 'ASC':
          sortClass = 'sorting_asc';
          break;
        case 'DESC':
          sortClass = 'sorting_desc';
          break;
      }
    }
    else {
      sortClass = 'sorting_both';
    }
    return sortClass;
  }

  //  設定分頁控制項的陣列
  set_pageNumArray() {
    //初始劃分頁陣列

    this.pageModel.pageNumArray = [];
    let i: number = 0;

    //計算起始頁
    this.pageModel.startPg = Math.floor((this.pageModel.pageIndex - 1) / 10) * 10 + 1;

    if (this.pageModel.startPg + 10 > this.pageModel.pageTotal) {
      this.pageModel.pageNumArrayMax = this.pageModel.pageTotal;
    }
    else {
      this.pageModel.pageNumArrayMax = this.pageModel.startPg + 10 - 1;
    }
    for (i = this.pageModel.startPg; i <= this.pageModel.pageNumArrayMax; i++) {
      this.pageModel.pageNumArray.push(i);
    }
  }

  setPageIndex(pageIndex: number) {
    if (pageIndex > 0 && pageIndex <= this.pageModel.pageTotal) {
      this.pageModel.pageIndex = pageIndex;

      if (this.pageModel.routeMode) {
        let currentPath = this.location.path();
        if (currentPath.indexOf("?") != -1)
          currentPath = currentPath.substr(0, currentPath.indexOf("?"));

        this.location.go(currentPath, this.getQueryParameter().join("&"));
      }
      
      this.getData();
    }
  }

  getQueryParameter() {

    let parameters = [];

    if (this.pageModel.pageIndex && this.pageModel.pageIndex != 1) {
      parameters.push(`PageModel_pageIndex=${this.pageModel.pageIndex}`);
    }

    if (this.pageModel.pageSize) {
      parameters.push(`PageModel_pageSize=${this.pageModel.pageSize}`);
    }

    if (this.pageModel.orderByDirection) {
      parameters.push(`PageModel_orderByDirection=${this.pageModel.orderByDirection}`);
    }

    if (this.pageModel.orderByField) {
      parameters.push(`PageModel_orderByField=${this.pageModel.orderByField}`);
    }

    this.pageModel.conditionItems.forEach(item => {
      parameters.push(`PageModel_conditionItems_${item.field}=${item.value}`);
    })

    return parameters;
  }

  setPageSize() {
    this.setPageIndex(this.pageModel.pageIndex)
  }
}




