import { Options } from 'chartjs-plugin-datalabels/types/options';
import { Component, OnInit } from '@angular/core';
import Chart, { ChartOptions } from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-progress-js-chart',
  templateUrl: './progress-js-chart.component.html',
  styleUrls: ['./progress-js-chart.component.css']
})
export class ProgressJsChartComponent implements OnInit{
chartData: number[] = [40,60]
chartLabels: string[] = ['ذكور', 'اناث'];
chartOptions: any;
chartColors: any[] | undefined;

ngOnInit() {
  const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
  const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['انثي', 'ذكر'],
      datasets: [
        {
          data: [300, 500], // Example data
          backgroundColor: ['#03A677', '#FDBE4A'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      spacing: 0,
      cutout: 120,
      plugins: {
        datalabels: {
          color: '#1E1E1E', // Color of the data label
          font: {
            size: 24, // Font size of the data label
          },
          formatter: (value, context) => {
            console.log(value);
            
            return value;
            
          },
        },
        title: {
          display: true,
          text: 'Chart Title',
        },
      },
    },
  });
  
  

  // this.chartOptions = {
  //   // responsive: true,
  //   // maintainAspectRatio: false,
  //   cutout: 120,
  //   data: {
  //     labels: ['انثي', 'ذكر'],
  //     datasets: [
  //       {
  //         data: [300, 500], // Example data
  //         backgroundColor: ['#03A677', '#FDBE4A'],
  //         borderWidth: 0, 
  //       },
  //     ],
  //   },
  //   legend: {
  //     position: 'left',
  //     labels: {
  //       fontFamily: 'Tajawal',
  //       fontWeight: 500,
  //       fontSize: 15,
  //       fontColor: '#1E1E1E'
  //     }
  //   },
  //   tooltips: {
  //     enabled: true
  //   },
  //   plugins: {
  //     datalabels: {
  //       color: '#F94C4C',
  //       font: {
  //         family: 'Tajawal',
  //         weight: 500,
  //         size: 17
  //       },
  //       formatter: (value: any, context: any) => {
  //         if (context.chart.data.labels[context.dataIndex] === 'اناث') {
  //           return value.toFixed(1) + '%';
  //         }
  //         return '';
  //       }
  //     },
  //     // doughnutlabel: {
  //     //   labels: [
  //     //     {
  //     //       text: 'Total',
  //     //       font: {
  //     //         size: '18px',
  //     //         weight: 500,
  //     //         family: 'Tajawal'
  //     //       },
  //     //       color: '#55565A'
  //     //     }
  //     //   ]
  //     // }
  //   }
  // };

}
}


