import { Component, OnInit } from '@angular/core';

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
  selector: 'app-thirdprog',
  templateUrl: './thirdprog.component.html',
  styleUrls: ['./thirdprog.component.css']
})
export class ThirdprogComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.chartOptions.series[0]);
    let array = this.chartOptions.series[0].data;
    let fully:number[] = [];
    for( let i = 0; i<10; i++){
      // console.log(array[i].y);
      fully.push(array[i].y);
      // console.log(array);
    }
    let max = Math.max(...fully)
    let min = Math.min(...fully)
    console.log(Math.max(...fully));

    console.log("salma")
  }
//   ngOnInit(): void {
//     console.log(this.chartOptions.series[0].data[0].y);
//     // console.log( Math.max(...(this.chartOptions.series[0].data[0].y)));
//    const  array=(this.chartOptions.series[0].data);
//    const fullY=[]
//     for(let i=0 ; i<array.length ; i++){ 
// fullY.push(array[i].y)

//     }
//     console.log(fullY);
//     console.log(Math.max(...fullY));
    
//   }
  
  chartOptions: ApexChart | any = {
    
    chart: {
        height: 400,
        type: 'bar',
        toolbar: false,
    },
    grid: {
      // Customize the grid lines
      borderColor: '#E0E0E0', // Color of the grid lines
      strokeDashArray: 4,     // Length of dashes in the line
    },
    series: [{
      type:  "column",
      data: [{
        x: 'شركة الراجحي للتأمين التعاوني',
        y: 10.726,
      }, {
        x: 'شركه اباك السعوديه للتأمين التعاوني',
        y: 9.726
      }, {
        x: 'شركة المجموعة المتحدة للتأمين التعاوني',
        y: 5.726
      }, {
        x: 'شركه التعاونيه للتأمين ',
        y: 7.726
      }, {
        x: 'الشركة السعودية للتأمين التعاوني',
        y: 4.726
      }, {
        x: 'شركة المتوسط والخليج للتأمين واعادة التأمين التعاوني',
        y: 3.726
      }, {
        x: 'الشركة العالمية للتأمين التعاوني',
        y: 2.726
      }, {
        x: 'شركة الاتحاد التجاري للتأمين التعاوني',
        y: 3.641
      }, {
        x: 'شركة التامين واعادة لتأمين التعاوني',
        y: 7.435
      }, {
        x: 'شركة التامين واعادة لتأمين التعاوني',
        y: 5.881
      }
    ], 
    }
 ],
    plotOptions: {
      bar: { 
        columnWidth: '48.299px',
        columnHeight: '130.042px',
        borderRadius: 17,
        dataLabels: {
          position: "top", // top, center, bottom
        }
      }
    },
    colors: ['#01A365','#FDBE4A'],
      // // Get the maximum and minimum values in the data series
      // const max = Math.max(...w.config.series[0].data);
      // const min = Math.min(...w.config.series[0].data);
      // console.log(min);

      // // Assign yellow color to columns with max and min data labels
      // if (x>2) {
      //   return '#FDBE4A'; // Yellow
      // } else {
      //   return '#03A677'; // Green
      // }
    
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opts: any) {
          return val;
      },
      textAnchor: 'middle',
      distributed: true,
      offsetX: 0,
      offsetY: -22,
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
    fill: {
      
      // colors: function()
      // {return '#FDBE4A' }
    },
    // },

    legend: {
      show: false,
      position: 'top',
    },

    title: {
      text: "أعلي عشر شركات لتامين السيارات",
      align: "right",
      style: {
         // floating: 0,
        // offsetY: 40,
        fontSize: '20px',
        fontFamily: 'Tajawal',
        fontWeight: '700',
        color: "#013723",
     
      }
    },
    yaxis: {
      enabled:true,
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
        }
      }
    },
    xaxis: {
      position: 'bottom',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        formatter: function(value:  string):string[]
        {
          
            // Split the sentence into words
            const words = value.split(' ');
            
            // Initialize an array to hold the lines
            const lines: string[] = [];
            
            // Iterate through the words and group them into lines with two words each
            for (let i = 0; i < words.length; i += 2) {
              const line = [words[i]];  
              if (i + 1 < words.length) {
                line.push(words[i + 1]);
              }
              lines.push(line.join(' '));
            }
            return lines;
        },
        style: {
          fontWeight: '400',
          fontFamily: 'Tajawal',
          fontSiza: '10px',
          colors: ['#000','#000','##000','#000','#000','#000','#000','#000','#000','#000'],
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
