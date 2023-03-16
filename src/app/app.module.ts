import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopDealsComponent } from './components/top-deals/top-deals.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MedicineHomeComponent,
    TopDealsComponent
 
 
 
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    CarouselModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
