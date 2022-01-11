
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  
  CartsStoreModule,
  MainStoreModule,
  ProductsStoreModule,
  SalesStoreModule
} from 'store';
import { EnvironmentTOKEN } from 'core';
import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ConfigurationService } from 'api';
import { NavigationService } from './services/navigation.service';

import { TableModule } from 'primeng/table';
import { ButtonModule, DialogModule, InputTextModule } from 'primeng/primeng';
import { AdminModule } from './admin/admin/admin.module';
import { ProductFormModule } from './admin/product-form/product-form.module';
import { HomeModule } from './home/home/home.module';
import { ProductModule } from './home/product/product.module';
import { ShoppingCartModule } from './home/shopping-cart/shopping-cart.module';
import { StatsModule } from './stats/stats/stats.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'admin', loadChildren: 'src/app/admin/admin/admin.module#AdminModule' },
      { path: 'home', loadChildren: 'src/app/home/home/home.module#HomeModule'},
      { path: 'stats', loadChildren: 'src/app/stats/stats/stats.module#StatsModule'},
      { path: '**', redirectTo: '404' }
    ]),
    MainStoreModule,
    AdminModule,
    ProductFormModule,
    HomeModule,
    ProductModule,
    ShoppingCartModule,
    StatsModule,
    ProductsStoreModule,
    CartsStoreModule,
    SalesStoreModule
  ],
  providers: [
    NavigationService,
    { provide: APP_INITIALIZER, useFactory: initConfigValues, deps: [ConfigurationService], multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: EnvironmentTOKEN, useValue: environment }
    //{ provide: HTTP_INTERCEPTORS, useClass: ChacheHttpInterceptor },
    //{ provide: HTTP_INTERCEPTORS, useClass: ClientLogHttpInterceptor },
    //{ provide: HTTP_INTERCEPTORS, useClass: WebApiHttpInterceptor },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initConfigValues(config: ConfigurationService) {
  return (() => config.initConfiguration(environment.configPath));
}