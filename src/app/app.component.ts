import { Component } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  chartOptions: ApexChart | any = {
      chart: {
          height: 300,
          type: 'bar',
          toolbar: false,
      },
      grid: {
        // Customize the grid lines
        borderColor: '#E0E0E0', // Color of the grid lines
        strokeDashArray: 4,     // Length of dashes in the line
      },
      series: [{
        data: [{
          x: ' ديسمبر',
          y: 6.986,
          
        }, {
          x: 'نوفمبر',
          y: 7.756
        }, {
          x: 'اكتوبر',
          y: 10.686
        }, {
          x: 'سبتمبر',
          y: 4.014
        }, {
          x: 'اغسطس',
          y: 7.716
        }, {
          x: 'يوليو',
          y: 9.106
        }, {
          x: 'يونيو',
          y: 6.156
        }, {
          x: 'مايو',
          y: 5.543
        }, {
          x: 'ابريل',
          y: 9.756
        }, {
          x: 'مارس',
          y: 7.112
        }, {
          x: 'فبراير',
          y: 4.756
        }, {
          x: 'يناير',
          y: 7.726
        }
      ]
      }],
      plotOptions: {
        bar: { 
          columnWidth: '27.59px',
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          }
        }
      },
      colors: ['#03A677'],

      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
            return val;
        },
        textAnchor: 'middle',
        distributed: true,
        offsetX: 0,
        offsetY: -24,
        fill: "#1C1C1C",
        style: {
            fontSize: '12px',
            fontFamily: 'Tajawal',
            fontWeight: '500',
        },
        background: {
          enabled: true,
          foreColor: '#1C1C1C',
          borderRadius: 4,
          padding: 4,
          // opacity: 0.3,
          // borderWidth: 1,
          // borderColor: '#00000026',
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 7,
            color: '#00000026',
            opacity: 0.6
          },
        },
    
      },

      legend: {
        show: false,
        position: 'top',
      },
      title: {
        text: "إنتهاء التامين حتى نهاية السنة",
        align: "center",
        style: {
           // floating: 0,
          // offsetY: 4,
          fontSize: '20px',
          fontFamily: 'Tajawal',
          fontWeight: '700',
          color: "#013723"
        }
      },
      yaxis: {
        show: true,
        labels: {
         formatter: function (value:any) {
            // Customize the y-axis label format here
            return  value.toFixed(0); // Example: Prefix with "$" and format as a currency
          },
          style: {
            colors: ['#8D9092'],
            fontSize:  '14px',           
            fontFamily: 'Tajawal',
            fontWeight: '400',
            // cssClass: 'apexcharts-xaxis-label',
          },
          
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      position: 'bottom',
        labels: {
          style: {
            colors: ['#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092'],
          }
        }
      },
      axisTicks: {
        show: false,
    },
  };

  chartData: ApexAxisChartSeries | any = [
      {
          name: 'Series 1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
       
      }
  ];

}

