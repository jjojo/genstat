import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-chartjs';
import { LineChartComponent } from './app/lineChart/line-chart';

import { ROUTING } from './app.routing.ts';
import { MyApp } from './app/app';
import { About } from './app/about/about';
import { Home } from './app/home/home';
import { StartComponent } from './app/start/start.component';
import { StatisticsComponent } from './app/statistics/statistics.component';
import { MenuComponent } from './app/menu/menu.component';
import { EconComponent } from './app/econ/econ.component';
import { InputMenuComponent } from './app/inputMenu/inputMenu.component';

import { StatisticsService } from './app/services/statistics.service';

import { SelectComponent } from './app/components/select/select';
import { HighlightPipe } from './app/components/select/select-pipes';
import { OffClickDirective } from './app/components/select/off-click';


//declare alll dependencies and libs the app uses

@NgModule({
  imports: [ 
  BrowserModule,
  HttpModule,
  ROUTING,
  ChartModule,
  FormsModule,
  ],
  declarations: [ 
  MyApp, 
  About, 
  Home,
  LineChartComponent,
  MenuComponent,
  EconComponent,
  InputMenuComponent,
  StartComponent,
  StatisticsComponent,
  SelectComponent,
  HighlightPipe,
  OffClickDirective
  //StatisticsService
  ],
  bootstrap: [ MyApp ],
  providers : [
  StatisticsService
  ]
})
export class AppModule {}
