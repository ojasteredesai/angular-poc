import { Routes } from '@angular/router';
import { Timesheet } from './timesheet/timesheet';
import { TimesheetEntry } from './timesheet/timesheet-entry';
import { Invoice } from './invoice/invoice';
import { Expense } from './expense/expense';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'timesheet', component: Timesheet },
  { path: 'timesheet-entry', component: TimesheetEntry },
  { path: 'invoice', component: Invoice },
  { path: 'expenses', component: Expense },
  { path: '**', redirectTo: '/home' }
];
