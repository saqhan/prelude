import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BuildingComponent } from './building/building.component';
import { ProductsComponent } from './products/products.component';
import { SpecializeComponent } from './specialize/specialize.component';
import { LogosComponent } from './logos/logos.component';
import { BannerComponent } from './banner/banner.component';
import { DesignProductsComponent } from './design-products/design-products.component';
import { TabsComponent } from './tabs/tabs.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FilterComponent } from './filter/filter.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuildingComponent,
    ProductsComponent,
    SpecializeComponent,
    LogosComponent,
    BannerComponent,
    DesignProductsComponent,
    TabsComponent,
    StatisticsComponent,
    FilterComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports: [
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
