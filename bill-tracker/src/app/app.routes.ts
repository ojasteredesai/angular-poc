import { Routes } from '@angular/router';
import { Timesheet } from './timesheet/timesheet';
import { Invoice } from './invoice/invoice';
import { Expense } from './expense/expense';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'timesheet', component: Timesheet },
  { path: 'invoice', component: Invoice },
  { path: 'expenses', component: Expense },
  { path: '**', redirectTo: '/home' }
];
