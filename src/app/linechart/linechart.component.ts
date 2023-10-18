import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexAnnotations,
  ApexOptions
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: "category" | "string" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})

export class LinechartComponent {
  chartOptions: ApexOptions = {
    chart: {
      height: 350, 
      type: 'line',
      toolbar: {
        show: false // Set this to false to hide the toolbar
      },
    },
    legend: {
      show: false // Set this property to false to hide the legend
    },
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [10.726, 9.726, 5.726, 7.726, 4.726, 3.726, 2.726, 3.641, 7.435, 5.881],
        
      },
      {
        name: "Social Media",
        type: "line",
        data: [10.726 * 10, 9.726 * 10, 5.726 * 10, 7.726 * 10, 4.726 * 10, 3.726 * 10, 2.726 * 10, 3.641 * 10, 7.435 * 10, 5.881 * 10]
      }
    ],
    stroke: {
      width: [0, 5],
    },

    title: {
      text: "أعلي عشر شركات لتامين السيارات",
      align: "right",
      offsetX: -160,
      style: {
        fontSize: '20px',
        fontFamily: 'Tajawal',
        fontWeight: '700',
        color: "#013723",

      }
    },
    plotOptions: {
      bar: {
        columnWidth: '48.299px',
        barHeight: '130.042px',
        borderRadius: 17,
        dataLabels: {
          position: "top", // top, center, bottom
        }
      },
    },
    grid: {
      // Customize the grid lines
      borderColor: '#E0E0E0', // Color of the grid lines
      strokeDashArray: 4,     // Length of dashes in the line
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
      formatter: function (val: any, opts: any) {
        return val;
      },
      textAnchor: 'middle',
      distributed: true,
      offsetX: 0,
      offsetY: -9,
      style: {
        colors: ['#fff'],
        fontSize: '12px',
        fontFamily: 'Tajawal',
        fontWeight: '500',
      },
      background: {
        enabled: true,
        foreColor: '#1C1C1C',
        borderRadius: 4,
        padding: 4,
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
    labels: [
      "شركة الراجحي للتأمين التعاوني",
      "شركه اباك السعوديه للتأمين التعاوني",
      "شركة المجموعة المتحدة للتأمين التعاوني",
      "شركه التعاونيه للتأمين",
      "الشركة السعودية للتأمين التعاوني",
      "شركة المتوسط والخليج للتأمين واعادة التأمين التعاوني",
      "الشركة العالمية للتأمين التعاوني",
      "شركة الاتحاد التجاري للتأمين التعاوني",
      "شركة التامين واعادة لتأمين التعاوني",
      "شركة التامين واعادة لتأمين التعاوني",

    ],
    xaxis: {
      type: "category",
      position: 'bottom',
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        maxHeight: 100,
        formatter: function (value: string | undefined): string[] {

          // Split the sentence into words
          const words = value?.split(' ');

          // Initialize an array to hold the lines
          const lines: string[] = [];
          if (words?.length) {

            for (let i = 0; i < words.length; i += 2) {
              const line = [words[i]];
              if (i + 1 < words.length) {
                line.push(words[i + 1]);
              }
              lines.push(line.join(' '));
            }
          }

          return lines;
        },
        style: {
          fontWeight: '500',
          fontFamily: 'Tajawal',
          fontSize: '10px',
          colors: ['#000','#000','##000','#000','#000','#000','#000','#000','#000','#000'],
        }
      }
    },
    fill: {
     
    },
    colors: ['#01A365', '#FDBE4A'],

    yaxis: [
      {
        show: true,
        title: {
          text: 'العدد',
          rotate: 0,
          offsetX: 20, 
          offsetY: -150,
          style: {
            color: '#000',
            fontSize: '23px',
            fontFamily: 'Poppins', 
            fontWeight: 500,
            // cssClass?: string;
          }
        },
        // enabled: true,
        labels: {
          formatter: function (value: any) {
            // Customize the y-axis label format here
            return value.toFixed(0); // Example: Prefix with "$" and format as a currency
          },
          style: {
            colors: ['#292D30'],
            fontSize: '14px',
            fontFamily: 'Tajawal',
            fontWeight: '400',
          },
        },
        // min:0,
        // max: 10,
        tickAmount: 6,
      },
      {
        opposite: true,
        // enabled: true,
        show: true,
        labels: {
          formatter: function (value: any) {
            // Customize the y-axis label format here
            return value.toFixed(0) + '%'; // Example: Prefix with "$" and format as a currency
          },
          style: {
            colors: ['#292D30'],
            fontSize: '12px',
            fontFamily: 'Tajawal',
            fontWeight: '400',
          }
        },
        tickAmount: 10,
      }
    ]

  };

  // colors: Function({value, dataPointIndex, w }){
  //   // Define your custom color logic here
  //   // You can access the value, dataPointIndex, and the chart instance (w)
  
  //   // Example: Make columns with values greater than 50 red, others green
  //   if (value > 50) {
  //     return '#FF5733'; // Red
  //   } else {
  //     return '#01A365'; // Green
  //   }
  // },
}

