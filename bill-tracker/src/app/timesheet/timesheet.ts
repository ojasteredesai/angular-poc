import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterLink],
  templateUrl: './timesheet.html',
  styleUrls: ['./timesheet.css'],
})
export class Timesheet implements OnInit {
  timesheets: Array<{resourceName: string; duration: number; billRate: number; totalPayment: number}> = [];

  ngOnInit() {
    let data: any[] = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        data = JSON.parse(window.localStorage.getItem('timesheets') || '[]');
      } catch (e) {
        data = [];
      }
    }

    this.timesheets = (data || []).map((ts: any) => {
      const duration = Number(ts.duration) || 0;
      const billRate = Number(ts.billRate) || 0;
      return {
        resourceName: ts.resourceName || '',
        duration,
        billRate,
        totalPayment: duration * billRate
      };
    });
  }
}
