import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { selected } from '../interface/ichart-color';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent implements OnInit{
  @Input() series:{name:string,type:string,data:number[],color?:string}[] = [
    {
      name: "النسبة المئوية",
      type: "column",
      data: [40, 70, 50, 80, 100],
      // color:'#01A365',
    },
    {
      name: "عدد العمليات",
      type: "line",
      data: [10.116, 8.236, 5.756, 7.456, 4.421],
      // color:'#FDBE4A',
    }
  ]

  @Input() labels:string[] = ['مرور الرياض مرك','مرور شمال الرياض','مرور شرق الرياض','بوابة الوزارة','مرور الروضة'] 
  @Input() columnWidth:string = '38px'
  @Input() borderRadius:number = 17
  @Input() borderRadiusApplication: "around" | "end" = 'around'
  @Input() isSelectedExecute:boolean = true
  @Input() colors:any[]= ['#01A365','#FDBE4A']
  @Input() selectedColor:string = "#CB0606"

  chartOptions!: ApexOptions;
  ngOnInit(): void {
    // let defaultColor= this.colors[0];
  
    this.chartOptions  = { 
      series: this.series,
      colors: this.colors,
      chart: {
        // height: 350,
        type: "line",
        parentHeightOffset:0,
        toolbar: {
          show: false // Set this to false to hide the toolbar
        },
        zoom: {
          enabled:false
        },
      //   events: {
      //     click:(event, chartContext, config)=> {
      //     let selectedcolumn = config.dataPointIndex;
      //     console.log(chartContext);
          
      //     if(this.isSelectedExecute) [
      //       chartContext.updateOptions ({
      //         colors: ['#CB0606','#FDBE4A']}, false, false) 
              
      //     ]
      //   },
      // },
      },
      stroke: {
        width: [0, 5],
        curve: "smooth",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: this.labels,
      xaxis: { 
        labels: {    
          trim: true, 
          hideOverlappingLabels: false,
          rotate: 0,
          style: {
            colors: ['#000'],
            fontFamily:'Tajawal',
            fontSize: '14px',
            fontWeight: 400, 
          }
        },
       axisTicks: {
        show:false,
       },    
       tooltip: {
        enabled: false,
        },
        crosshairs:{
          show:false,
       },
      },
      yaxis: [
        {
          tickAmount: 8,
          labels: {
              offsetX: -29,
              formatter: function (value: any) {
              // Customize the y-axis label format here
              return value.toFixed(0) + '%';
            },
            style: {
              colors: '#292D30',
              fontSize: '14px',
              fontFamily: 'Tajawal',
              fontWeight: 400,
            }
          },
          
        },
        {
         opposite: true,
         labels:{
          offsetX: -29,
          formatter: function (value: any) {
            return value.toFixed(0);
          },
          style: {
            colors: '#292D30',
            fontSize: '14px',
            fontFamily: 'Tajawal',
            fontWeight: 400,
          },
         },
        
        }
      ],
      plotOptions:{
        bar:{
          columnWidth: this.columnWidth,
          // barHeight: '130.042px',
          // distributed:true,
          borderRadius: this.borderRadius,
          borderRadiusApplication: this.borderRadiusApplication,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      grid: {
        // Customize the grid lines
        borderColor: '#E0E0E0', // Color of the grid lines
        strokeDashArray: 4,     // Length of dashes in the line
      },
      legend:{
        show:false
      },
      markers: {
        size: 3.3,
        // colors: this.markerColor,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        hover: {
          size: 6,
      },
        // strokeDashArray: 10,
        onClick(e: any): void {
          e.preventDefault
        },
        onDblClick(e: any): void {
          e.preventDefault
        }
    },
    }
  }
  
}
