import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({  
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './timesheet-entry.html',
  styleUrls: ['./timesheet-entry.css'],
})
export class TimesheetEntry {
  entry: { resourceName: string; date?: string; duration: number; billRate: number } = {
    resourceName: '',
    date: undefined,
    duration: 0,
    billRate: 0,
  };

  constructor(private router: Router) {}

  save() {
    if (typeof window === 'undefined' || !window.localStorage) {
      // Not in browser - nothing to do
      this.router.navigate(['/timesheet']);
      return;
    }

    try {
      const existing = JSON.parse(window.localStorage.getItem('timesheets') || '[]');
      const duration = Number(this.entry.duration) || 0;
      const billRate = Number(this.entry.billRate) || 0;
      const newEntry = {
        resourceName: this.entry.resourceName || '',
        date: this.entry.date || '',
        duration,
        billRate,
        totalPayment: duration * billRate,
      };
      existing.push(newEntry);
      window.localStorage.setItem('timesheets', JSON.stringify(existing));
    } catch (e) {
      // ignore storage errors
    }

    this.router.navigate(['/timesheet']);
  }

  cancel() {
    this.router.navigate(['/timesheet']);
  }
}
