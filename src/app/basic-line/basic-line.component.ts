import { Component, Input, OnInit } from '@angular/core';
import {
  ApexOptions,
} from 'ng-apexcharts';


@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.css']
})

export class BasicLineComponent implements OnInit{

  chartOptions!: ApexOptions; 
  @Input() series:{name:string, data:number[]}[] = []
  @Input() labels: any[] = []
  @Input() colors: string[] = []
  @Input() rotate: number = 0
  @Input() xAxisOffsetY:number = 0
  @Input() xAxisOffsetX:number = 0
  @Input() gridColor: string = '#E0E0E0'
  @Input() gridDash: number = 10
  @Input() gridXaxis: boolean = false
  @Input() gridYaxis: boolean = false
  @Input() yAxisBorder:boolean = false
  @Input() xAxisBorder:boolean = false
  @Input() appearAllDataLabelInSelect:boolean = false
  @Input() isAppearDiffYAxis:boolean = true
  @Input() isSelectedDataLabelAppear=false
  @Input() dataLabelAppear:boolean = false
  @Input() markerColor:string[] = ['#FDBE4A']
   ngOnInit(): void {
    this.chartOptions= {
  
    chart: {
        // height:210,
        // width: 600,
        parentHeightOffset:0,
        type: 'line',
        offsetX: 0,
        offsetY: 0,
      zoom: {
        enabled:false
      },
        toolbar: {
          show: false // Set this to false to hide the toolbar
        },
        events: {
          click:(event, chartContext, config)=> {
          let selectedcolumn = config.dataPointIndex
              // Disable data labels for all columns except the clicked one
              chartContext.updateOptions({
                dataLabels: {
                  enabled: true,
                  formatter: (val: any, { seriesIndex, dataPointIndex }: any)=> {
                   if(this.appearAllDataLabelInSelect){
                    return  val.toFixed(3);
                   }else{
                    if (dataPointIndex === selectedcolumn && this.isSelectedDataLabelAppear) {
                      return  val.toFixed(3); // Display the data label only for the clicked column
                    } else {
                      return ''; // Hide data labels for other columns
                    }
                   }
                  }
                }
              },false,false);
          },
          
        },
    },
    stroke:{
      width: 7,
      curve: "smooth"
    },
    colors: this.colors,
    series: this.series,
      xaxis: {
        labels: {
          rotate: this.rotate,
          offsetY: this.xAxisOffsetY,
          offsetX:this.xAxisOffsetX,
          // rotateAlways: true, 
          style: {
            fontFamily: 'Tajawal',
            fontSize: '12px',
            fontWeight: 400,
            colors:'#292D30', 
          }
        },
        crosshairs:{
           show:false,
        },
        categories: this.labels,
        // to remove border and ticks in the bottom 
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: this.xAxisBorder,
          color: '#D4D4D4',
          strokeWidth: 1,
          offsetY: -1,
        },
        tooltip: {
          enabled: false,
      },
    },
    yaxis: {
        tickAmount: 4,
        // forceNiceScale: true,
        labels: {
            offsetX: -29,
            formatter: function (value: any) {
            // Customize the y-axis label format here
            return value + 'K';
          },
          style: {
            colors: '#8D9092',
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontWeight: 400,
          }
        },
        axisBorder: {
          show: this.yAxisBorder,
          color: '#D4D4D4',
          width: 1,
          offsetX: 29,
          offsetY:0,  
      },
    },
    markers: {
        size: 3.3,
        colors: this.markerColor,
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
    tooltip: {
      shared: true,
      x:{
        show:true
      },
      enabled: true,
      theme:'light',
      y: {
        formatter: function (value: number) {
          // Customize the tooltip's y-value format here
          return value + 'K'; // Format the value as needed (e.g., two decimal places)
        },
      },
      marker: {
        show: true,
    },
      onDatasetHover: {
        highlightDataSeries: true,
    },
    },
    legend: {
      position:"top",
      show: true,
      horizontalAlign: "left",
      fontSize: '13px',
      fontFamily: 'Tajawal',
      fontWeight: 700,
      textAnchor: 'end',
      
      labels: {
          colors: '#717171',
      },
      markers: {
          width: 13,
          height: 13,
          offsetX: 6,
          offsetY: 2,
          radius: 3,
      },
      itemMargin: {
          horizontal: 15,
      },
      containerMargin: {
          left: 0,
      },
      onItemClick: {
          toggleDataSeries: false,
      },
    },
    grid:{
        borderColor: this.gridColor,
        strokeDashArray: this.gridDash, 
        xaxis:{
          lines: {
            show: this.gridXaxis,
          }
        },
        padding: {
          top: 0,
          bottom: 0,
        },  
    },
    dataLabels:{
      // enabled: true,
      enabled:this.dataLabelAppear,
       formatter: function (val: any, opts: any) {
        return val.toFixed(3); // You can customize the label format here  
        // return 2
        },
       textAnchor: 'middle',
       distributed: true,
       offsetX: 0,
       offsetY: -8,
      style: {
          fontSize: '14px',
          fontFamily: 'Tajawal',
          fontWeight: 500,
          colors: ['#027180']
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        borderRadius: 7,
         borderColor:'',
        padding: 15,
        opacity: 1,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 7,
          color: '#00000026',
          opacity: 0.6
        },
      },
      // dropShadow?: ApexDropShadow;
      // formatter?(val: string | number | number[], opts?: any): string | number;
    },
    states:{
      normal: {
        filter: {
            type: 'dark',
            value:1,
           },
    },
    // hover?: {
    //     filter?: {
    //         type?: string;
    //         value?: number;
    //     };
    // };
    // active?: {
    //     allowMultipleDataPointsSelection?: boolean;
    //     filter?: {
    //         type?: string;
    //         value?: number;
    //     };
    // };
    },
     }
   }
    
  
}

