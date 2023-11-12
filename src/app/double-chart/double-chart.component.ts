import { Color } from './../interface/ichart-color';
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

  @Input() labels:any = []
  @Input() yAxisData:any= [100, 200, 90, 120, 161, 200]
  @Input() yAxisData2:any= [76, 85, 101, 98, 87, 105]
  @Input() columnWidth: string = '40%' 
  @Input() borderRadius: number = 3
  @Input() borderRadiusApplication: "around" | "end" = 'around'
  @Input() colors:string[]= ['#03A677','#FDBE4A']
  @Input() isAppearDiffYAxis: boolean = false
  @Input() yAxisBorder: boolean = false
  @Input() yAxisTitle: string = "العدد"
  @Input() yAxisDataTitle: string = ''
  @Input() yAxisData2Title: string = ''
  ngOnInit(): void {
   this.chartOptions = {
    series: [
      {
        name: this.yAxisDataTitle,
        data: this.yAxisData,
       
      },
      {
        name: this.yAxisData2Title,
        data: this.yAxisData2,
       
      }
    ],
    colors: this.colors,  
    chart: {
      type: "bar",
      height: 350,
      parentHeightOffset:0,
      toolbar:{show: false},
    },
    labels: this.labels,
    plotOptions:{
      bar:{
        columnWidth: this.columnWidth,
        borderRadius: this.borderRadius,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top", // top, center, bottom
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis:{
      axisBorder: {
        show: true,
        color: '#D4D4D4',
        strokeWidth: 1,
        // offsetX: 22,
        offsetY:0,
    },
    labels: {
      show: true,
      trim: true,
      style: {
          colors: '#909090',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'Tajawal',
      },
  },
    axisTicks:{
      show:false,
    }
    },
    yaxis:
      {
        
        labels:{
          offsetX: -24,
          padding: 12,
          formatter: (value: any) => {
              return value + 'K'
            },
          style:{
            colors:['#909090'],
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
          }
        },
        
        axisBorder: {
          show: true,
          color: '#D4D4D4',
          width: 1,
          offsetX: 22,
          offsetY:0,
          
      },
        tickAmount: 4,
      },
      grid:{
        borderColor:'#F5F5F5',
        xaxis:{
          lines: {
            show: true,
          }
        },
        yaxis:{
          lines: {
            show: true,
          }
        },
        padding: {
          top: 0,
          bottom: 0,
        },  
      },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + "K";
        }
      }
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
          offsetX: 7,
          offsetY: 2,
      },
      itemMargin: {
          horizontal: 15,
      },
      containerMargin: {
          left: 0,
          // top: 100,
      },
      onItemClick: {
          toggleDataSeries: false,
      },
      // onItemHover: {
      //     highlightDataSeries: false,
      // },
    },
    states: {
      normal: {
        filter: {
            type: 'none',
        }
    },
    hover: {
        filter: {
            type: 'none',     
        }
    },
      active: {
        allowMultipleDataPointsSelection: true,
      filter: {
          type: 'none',
      }

      }
    },
   }
  } 
}
