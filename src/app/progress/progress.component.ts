import { Component } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexGrid,
  ApexOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  chartOptions: ApexOptions  = {
    chart: {
      type: 'donut',
    },
    series:[60,40],
    labels: [' ساري', ' منتهي'],
    colors: ['#03A677','#FDBE4A'],

    dataLabels: {
      enabled: true,
      formatter: function (val:any) {
        return val + "%"
      },
      distributed: true,
      textAnchor: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: 
        {
          fontSize: '25px',
          fontFamily: 'Helvetica, Arial, sans-serif',
        },
        dropShadow: {
          enabled: false,
      },
      
  },
  plotOptions: {
    pie: {
      offsetY: -65,
      customScale: 0.6,
      offsetX: -50,
      donut: {
       labels: {
        show:true,
        name: {
          show: true,
          fontFamily: 'Tajawal',
          fontWeight: 500,
          color: '#1c1c1c',
          offsetY: 6,
          // formatter?(val: string): string;
      },
      total: {
        show: true,
        // showAlways?: boolean;
        fontFamily: 'Tajawal',
        fontSize: '40px',
        fontWeight: 500,
        label: 'نهاية التأمين',
        color: '#1c1c1c',
        formatter(val: any): string {
          return ''
        },
    },
       },

      },
    }
  },

  // stroke: {
  //   show: true,
  //   color: '#1C1C1C', // Border color
  //   width: 2, // Border width
  // },

  legend: {
    show: true,
    position: 'left',
    fontFamily: 'Tajawal',
    fontWeight: 400,
    fontSize: '25px',
    offsetY: -15,
  },

  }
}