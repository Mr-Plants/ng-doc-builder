import { Routes } from '@angular/router';
import { DEMO_ROUTES } from './router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about' },
  { path: 'about', component:AboutComponent },
  ...DEMO_ROUTES,
  { path: '**', redirectTo: 'about', pathMatch: 'full' }
];
