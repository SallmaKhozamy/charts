import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { Color, labelColor } from '../interface/ichart-color';

@Component({
  selector: 'app-elfa2a-el3omrya',
  templateUrl: './elfa2a-el3omrya.component.html',
  styleUrls: ['./elfa2a-el3omrya.component.css']
})
export class Elfa2aEl3omryaComponent implements OnInit {
  ngOnInit(): void {
    if( this.chartOptions.dataLabels?.style?.colors){
    this.chartOptions.dataLabels.style.colors = labelColor(this.chartOptions);
  }
  if( this.chartOptions.dataLabels?.background?.foreColor){
    this.chartOptions.dataLabels.background.foreColor = Color(this.chartOptions);
  }
   }
  
  chartOptions: ApexOptions  = {
    chart: {
        height: 240,
        width: 410,
        offsetX: -40,
        type: 'bar',
        toolbar:{show: false},
        // events: {
        //   mounted: function(chartContext, config) {
        //     const xAxisLabels = document.querySelectorAll('.apexcharts-xaxis-label text');
    
        //     xAxisLabels.forEach((label) => {
        //       label.setAttribute('dy', '-10px'); // Adjust the value as needed
        //     });
        //   }
        // }
    },
    grid: {
      // Customize the grid lines
      borderColor: '#E0E0E0', // Color of the grid lines
      strokeDashArray: 4,     // Length of dashes in the line
    },
    series: [{
      data: [40.2, 72.6, 50, 88, 70, 38.5, 10,12,13,10,13]
    }],
    plotOptions: {
      bar: { 
        columnWidth: '9px',
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top", // top, center, bottom
        }
      }
    },
    colors: ['#03A677'],

    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
      return val + '%'; // You can customize the label format here  
      },
      textAnchor: 'middle',
      distributed: true,
      offsetX: 0,
      offsetY: -24,
    
      style: {
        fontSize: '12px',
        fontFamily: 'Tajawal',
        fontWeight: '500',
        colors: [] 
      },
      background: {
        enabled: true,
        foreColor: '',
        borderRadius: 4,
        padding: 8,
        borderColor:'',
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
      text: "الفئة العمرية",
      align: "right",
      offsetX: -115,
      offsetY:-8,
      style: {
        fontSize: '22px',
        fontFamily: 'Tajawal',
        fontWeight: '700',
        color: "#013723"
      }
    },
    yaxis: {
      show: true,
      // tickAmount: 4,
      labels: {
        offsetX: -20,
       formatter: function (value:any) {
          // Customize the y-axis label format here
          return  value.toFixed(0); 
        },
        style: {
          colors: ['#8D9092'],
          fontSize:  '14px',           
          fontFamily: 'Tajawal',
          fontWeight: '400',
        }
      }, 
      title: {
        text: 'النسبة المئوية',
        rotate: 0,
        offsetX: 0,
        offsetY: -95,
        style: {
            color: '#1c1c1c',
            fontSize: '12px',
            fontFamily: 'Poppins',
            fontWeight: 500,
        },
    },
    },
    xaxis: {
      categories: [
        '+ 50',
        '50-41',
        '40-31',
        '30-21',
        '20-13',
        '12-6',
        '5-0',
        '37',
        '39',
        '23',
        '23'
      ],
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
    position: 'bottom',
      labels: {
        rotate: 50,
        style: {
          colors: '#03A677',
          fontFamily: 'Tajawal',
          fontSize: "14px",
          fontWeight: 500,
          cssClass: 'apexcharts-xaxis-label text'
        },
        // formatter: function (value: string | undefined): string[] {

        //   // Split the sentence into words
        //   const words = value?.split(' ');

        //   // Initialize an array to hold the lines
        //   const lines: string[] = [];
        //   if (words?.length) {

        //     for (let i = 0; i < words.length; i += 2) {
        //       const line = [words[i]];
        //       if (i + 1 < words.length) {
        //         line.push(words[i + 1]);
        //       }
        //       lines.push(line.join(' '));
        //     }
        //   }

        //   return lines;
        // },
      }
    },

}; 

}
