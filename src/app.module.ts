import { NgModule, ValueProvider } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-chartjs';
import { LineChartComponent } from './app/lineChart/line-chart';
import { ShareButtonsModule } from "ng2-sharebuttons";

import { ROUTING } from './app.routing.ts';
import { MyApp } from './app/app';

import { About } from './app/about/about';
import { Home } from './app/home/home';

import { StartComponent } from './app/start/start.component';
import { StatisticsComponent } from './app/statistics/statistics.component';
import { MenuComponent } from './app/menu/menu.component';
import { FooterComponent } from './app/footer/footer.component';

import { EconComponent } from './app/econ/econ.component';

import { InputMenuComponent } from './app/inputMenu/inputMenu.component';

import { StatisticsService } from './app/services/statistics.service';
import { EconService } from './app/services/econ.service';
import { HealthService } from './app/services/health.service';
import { PowerService } from './app/services/power.service';
import { DrugsService } from './app/services/drugs.service';
import { FamilyService } from './app/services/family.service';

import { SelectComponent } from './app/components/select/select';
import { HighlightPipe } from './app/components/select/select-pipes';
import { OffClickDirective } from './app/components/select/off-click';
import {Ng2PageScrollModule} from 'ng2-page-scroll';


const WINDOW_PROVIDER: ValueProvider = {
    provide: Window,
    useValue: window
};

//declare alll dependencies and libs the app uses

@NgModule({
  imports: [
  BrowserModule,
  HttpModule,
  ROUTING,
  ChartModule,
  FormsModule,
  ShareButtonsModule,
  Ng2PageScrollModule
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
  OffClickDirective,
  FooterComponent
  //StatisticsService
  ],
  bootstrap: [ MyApp ],
  providers : [
  StatisticsService,
  EconService,
  HealthService,
  PowerService,
  DrugsService,
  FamilyService,
  WINDOW_PROVIDER
  ]
})
export class AppModule {}
