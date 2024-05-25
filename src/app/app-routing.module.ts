import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductItem1Component } from './products/product-item1/product-item1.component';
import { ProductItem2Component } from './products/product-item2/product-item2.component';
import { ServiceItem2Component } from './services/service-item2/service-item2.component';
import { ServiceItem1Component } from './services/service-item1/service-item1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceItem3Component } from './services/service-item3/service-item3.component';
import { ProductItem3Component } from './products/product-item3/product-item3.component';
import { ProductItem4Component } from './products/product-item4/product-item4.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product/item1', component: ProductItem1Component },
  { path: 'product/item2', component: ProductItem2Component },
  { path: 'product/item3', component: ProductItem3Component },
  { path: 'product/item4', component: ProductItem4Component },
  { path: 'services/item1', component: ServiceItem1Component },
  { path: 'services/item2', component: ServiceItem2Component },
  { path: 'services/item3', component: ServiceItem3Component },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  // Redirect empty path to 'home' (or any other default route)
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Wildcard route for a 404 page
  { path: '**', component: NotFoundComponent } // You need to create a NotFoundComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
