import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductItem1Component } from './products/product-item1/product-item1.component';
import { ProductItem2Component } from './products/product-item2/product-item2.component';
import { ServiceItem1Component } from './services/service-item1/service-item1.component';
import { ServiceItem2Component } from './services/service-item2/service-item2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceItem3Component } from './services/service-item3/service-item3.component';
import { ProductItem3Component } from './products/product-item3/product-item3.component';
import { ProductItem4Component } from './products/product-item4/product-item4.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductItem1Component,
    ProductItem2Component,
    ServiceItem1Component,
    ServiceItem2Component,
    ContactusComponent,
    AboutComponent,
    NavigationBarComponent,
    HomeComponent,
    NotFoundComponent,
    ServiceItem3Component,
    ProductItem3Component,
    ProductItem4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
