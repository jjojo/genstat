import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './app/lineChart/line-chart';

import { ROUTING } from './app.routing.ts';
import { MyApp } from './app/app';
import { About } from './app/about/about';
import { Home } from './app/home/home';
import { MenuComponent } from './app/menu/menu.component';
import { EconComponent } from './app/econ/econ.component';


//declare alll dependencies and libs the app uses

@NgModule({
  imports: [ 
  BrowserModule,
  HttpModule,
  ROUTING,
  ChartsModule
  ],
  declarations: [ 
  MyApp, 
  About, 
  Home,
  LineChartComponent,
  MenuComponent,
  EconComponent
  ],
  bootstrap: [ MyApp ]
})
export class AppModule {}
