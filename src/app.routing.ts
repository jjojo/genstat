import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './app/home/home';
import { About } from './app/about/about';
import { EconComponent } from './app/econ/econ.component';
import { StatisticsComponent } from './app/statistics/statistics.component';



// Routing is declared here
export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'about', component: About },
  { path: 'econ', component: EconComponent },
  { path: 'stat', component: StatisticsComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
