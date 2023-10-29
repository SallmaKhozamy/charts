import { Component, Input, OnInit } from '@angular/core';

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
export class ProgressComponent implements OnInit{

  @Input() labels:string[] = []
  @Input() series:number[] = []
  @Input() title:string = ''
  chartOptions!: ApexOptions; 
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'donut',
        animations: {
          enabled:false,
        }
      },
      series:this.series,
      labels: this.labels,

      colors: ['#03A677','#FDBE4A'],
  
      dataLabels: {
        enabled: true,
        formatter: function (val:any) {
          return val.toFixed(1) + "%"
        },
        distributed: true,
        textAnchor: 'middle',
        offsetY: 0,
        style: 
          {
            fontSize: '25px',
            fontWeight: 500,
            fontFamily: 'Poppins',
          },
          dropShadow: {
            enabled: false,
        },
        
    },
    plotOptions: {
      pie: {
        offsetY: -65,
        customScale: 0.5,
        offsetX: -50,
        // expandOnClick: false,
        donut: {
         labels: {
            show:true,
            name: {
              show: true,
              fontFamily: 'Tajawal',
              fontWeight: 500,
              color: '#1c1c1c',
              offsetY: -15,
              formatter(val: string): any {
                // Split the sentence into words
                const words = val?.split(' ');
                // Initialize an array to hold the lines
                const lines: string[] = [];
                if (words?.length) {
                  for (let i = 0; i < words.length; i += 1) {
                    const line = [words[i]];
                    lines.push(line.join(' '));
                  }
                }
                return lines;
              },
              
            },
            total: {
              show: true,
              showAlways: true,
              fontFamily: 'Tajawal',
              fontSize: '40px',
              fontWeight: 500,
              label: this.title,
              color: '#1c1c1c',
              formatter(val: any): string {
                
                return ''
                
              },
            },
         },
  
        },
        
      }
    },
    stroke: {
      show:true,
      width: 0, // Set the border width
    },
    legend:{
      show: true,
      position: 'left',
      fontFamily: 'Tajawal',
      fontWeight: 500,
      fontSize: '15px',
      offsetY: 100,
      offsetX: 8,
      labels:  {
        colors: '#1E1E1E',
      },
      markers: {
        width: 19,
        height: 19,
        radius: 4,
        offsetX: 7,
        offsetY: 5,
      },
      itemMargin: {
        vertical: 5,
    },

    },
    }
  }
 
}