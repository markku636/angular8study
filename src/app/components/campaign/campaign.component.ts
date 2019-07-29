import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/commons/data.service';
import { AlertModel, ConditionItem } from 'src/app/definitions/model';

import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { PaginationBase } from 'src/app/components/shared/pagination/pagination.base';
import { Location } from '@angular/common';
import { EnumHelper } from 'src/app/commons/utils.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { CampaignService } from './campaign.service';
import { Country, Currency, CampaignTriggerType, Channel, CampaignStatus, CampaignType, CampaignDateRangeType, Language } from 'src/app/definitions/ui-enums';
import { AlertType } from 'src/app/definitions/enums';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})


export class CampaignComponent extends PaginationBase<any> implements OnInit {
  select2Options: any = {
    multiple: true
  };

  isCollapsed = true;
  currencySelected: any;
  daterange: any = {};
  datePickeroptions: any = {
    locale: { format: 'YYYY-MM-DD hh:mm A' },
    // alwaysShowCalendars: false,
    timePicker: true,
    opens: 'left'
  };

  campaignStatus: Array<any>
  campaignType: Array<any>
  currency: Array<any>
  campaignDateRangeType: Array<any>
  channel: Array<any>
  triggerType: Array<any>
  country: Array<any>
  language: Array<any>
  campaignStatusList: {} = {}
  campaignTypeList: {} = {}
  currencyList: {} = {}
  campaignDateRangeTypeList: {}
  channelList: {} = {}
  triggerTypeList: {} = {}
  countryList: {} = {}
  languageList: {} = {}

  constructor(protected activeRoute: ActivatedRoute, protected dataService: DataService, private route: Router, protected alertService: AlertService, protected location: Location, protected sanitizer: DomSanitizer, private campaignService: CampaignService) {
    super(route, activeRoute, dataService, location);

  }

  ngOnInit() {    
  
    this.paginationInit();
    this.campaignStatusList = EnumHelper.getSelect2List(CampaignStatus, true);
    this.triggerTypeList = EnumHelper.getSelect2List(CampaignTriggerType, true);
    this.currencyList = EnumHelper.getSelect2List(Currency, true);
    this.campaignDateRangeTypeList = EnumHelper.getSelect2List(CampaignDateRangeType, true);
    this.channelList = EnumHelper.getSelect2List(Channel, true);
    this.campaignTypeList = EnumHelper.getSelect2List(CampaignType, true);
    this.countryList = EnumHelper.getSelect2List(Country, true);
    this.languageList = EnumHelper.getSelect2List(Language, true);
  }

  create() {
    var newAlert = new AlertModel();
    newAlert.isOpen = true;
    newAlert.msg = `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`
    newAlert.type = AlertType.Danger;
    // newAlert.timeout = 5000;
    this.alertService.addAlert(newAlert)
  }

  getData() { //可以抽到 Service
    var self = this;
    var queryString: string = this.getQueryParameter().join("&")
    this.dataService.get("/my-test-data/list.json?" + queryString, function (result) {
      self.pageModel.dataSource = result.data.dataSource;
      self.pageModel.dataTotal = result.data.dataTotal;
      self.pageModel.pageTotal = result.data.pageTotal;
      self.set_pageNumArray();
    })
  }



  selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);    
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

    // var newConditionItem = new ConditionItem();
    // newConditionItem.Field ="start"
    // newConditionItem.Value =value.start;
    // this.conditionItems.push(newConditionItem)
  }


  updateProduct(product: any) {

    // this.dataService.post("")

  }

}
