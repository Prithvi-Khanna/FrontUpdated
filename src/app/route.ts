import {Routes} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import { MiddleComponent } from './components/middle/middle.component';

export const MAIN_ROUTES: Routes = [
  {
    path : '',
    redirectTo: 'middle',
    pathMatch: 'full',

  },
  {
    path: 'middle',
    component: MiddleComponent
},
  {
    path: 'getpro',
    component: SearchComponent
  },
];
