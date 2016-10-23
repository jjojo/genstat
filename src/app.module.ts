import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './app/lineChart/line-chart';

import { ROUTING } from './app.routing.ts';
import { MyApp } from './app/app';
import { About } from './app/about/about';
import { Home } from './app/home/home';
import { MenuComponent } from './app/menu/menu.component';
import { EconComponent } from './app/econ/econ.component';
import { InputMenuComponent } from './app/inputMenu/inputMenu.component';

import { StatisticsService } from './app/services/statistics.service';


//declare alll dependencies and libs the app uses

@NgModule({
  imports: [ 
  BrowserModule,
  HttpModule,
  ROUTING,
  ChartsModule,
  FormsModule,
  ],
  declarations: [ 
  MyApp, 
  About, 
  Home,
  LineChartComponent,
  MenuComponent,
  EconComponent,
  InputMenuComponent
  //StatisticsService
  ],
  bootstrap: [ MyApp ],
  providers : [
  StatisticsService
  ]
})
export class AppModule {}
