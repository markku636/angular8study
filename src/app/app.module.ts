import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DataService } from './commons/data.service';
import { SharedService } from './commons/shared.service';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './components/shared/alert/alert.component';
import { AlertService } from './components/shared/alert/alert.service';
import { DaterangepickerModule } from './components/shared/daterangepicker/daterangepicker.module';
import { Select2Component } from './components/shared/select2/select2.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { LoadingDialogComponent } from './components/shared/loading-dialog/loading-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from './components/shared/layouts/layout.module';
import { NavbarPaginationComponent } from './components/shared/pagination/navbar-pagination.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PromissionguardGuard } from './guard/promissionguard.guard';
import { HomeComponent } from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
import { Select2DemoComponent } from './components/shared/select2/select2-demo/select2-demo.component';
import { DefaultLayoutComponent } from './components/shared/layouts/default-layout/default-layout.component';
import { UserComponent } from './components/user/user.component';
import { JwtInterceptor } from './commons/jwt-interceptor';
import { JwtErrorInterceptor } from './commons/jwt-error-interceptor';
import { SSOLoginComponent } from './components/ssologin/ssologin.component';
import { DialogService } from './components/shared/dialog/dialog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuicklinkStrategy, QuicklinkModule } from './preloading/quick-link';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDonePipe, FetchJsonPipe } from './commons/common';
import { DynamicImportModuleComponent } from './components/dynamic-import-module/dynamic-import-module.component';
import { PrefetchComponent } from './components/prefetch/prefetch.component';
import { ClientSideCacheComponent } from './components/client-side-cache/client-side-cache.component';

import { SleepPreloadingStrategy } from './preloading/sleep.preloading.strategy';
import { RoutePreloadingStrategy } from './preloading/route.preloading.strategy';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingDialogComponent,
    DialogComponent,
    CampaignComponent,
    Select2Component,
    Select2DemoComponent,
    AlertComponent,
    NavbarPaginationComponent,
    PageNotFoundComponent,
    HomeComponent,
    DefaultLayoutComponent,
    UserComponent,
    SSOLoginComponent,
    TodoComponent,        
    TodoDonePipe,
    FetchJsonPipe,    
    DynamicImportModuleComponent, PrefetchComponent, ClientSideCacheComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DaterangepickerModule,
    QuicklinkModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),    
    
  ],
  entryComponents: [LoadingDialogComponent, DialogComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtErrorInterceptor, multi: true }, 
    DataService, SharedService, AlertService, PromissionguardGuard,DialogService, 
    QuicklinkStrategy

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
