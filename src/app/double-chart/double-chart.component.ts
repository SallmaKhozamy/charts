import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { selected } from '../interface/ichart-color';
@Component({
  selector: 'app-double-chart',
  templateUrl: './double-chart.component.html',
  styleUrls: ['./double-chart.component.css']
})
export class DoubleChartComponent implements OnInit{
  chartOptions!: ApexOptions; 
  ngOnInit(): void {
   this.chartOptions = {
    series: [
      {
        name: "سعودي",
        data: [100, 200, 90, 120, 161, 200, 63, 60, 66]
      },
      {
        name: "غير سعودي",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }
    ],
   }
  }

}
