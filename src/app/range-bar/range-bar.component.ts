import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { selected } from '../interface/ichart-color';

@Component({
  selector: 'app-range-bar',
  templateUrl: './range-bar.component.html',
  styleUrls: ['./range-bar.component.css']
})
export class RangeBarComponent implements OnInit {
  @Input() seriesData:{x:string,y:number[]}[] = []
  @Input() seriesName:string = ''
  @Input() labels:string[] = []
  @Input() colors:string[]= ['#03A677']
  @Input() selectedColor:string | string[] = this.colors
  @Input() isSelectedExecute:boolean = true
  @Input() blueDataLabel:boolean = false
  @Input() whiteDataLabel:boolean = true
  @Input() appearAllDataLabelInSelect:boolean = true
  @Input() isSelectedDataLabelAppear=true

  chartOptions!: ApexOptions;
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          data: this.seriesData
        }
      ],
      colors:this.colors,
      chart: {
        // height: 350,
        type: "rangeBar",
        parentHeightOffset:0,
        zoom: {
          enabled: false
        },
        toolbar:{
          show:false,
        },
        events:{ 
          click:(event, chartContext, config)=> {
            let selectedcolumn = config.dataPointIndex
            if(this.isSelectedExecute) [
              chartContext.updateOptions ({
                colors: selected(selectedcolumn,chartContext.w.globals.labels.length,this.colors,this.selectedColor)}, false, false) 
            ]
            if(this.whiteDataLabel){
              chartContext.updateOptions({
                dataLabels: {
                  enabled: true,
                  style:{
                    colors:['#FFF']
                  },
                  background: {
                    foreColor: '#1C1C1C',
                  },
                  formatter: (val: any, { seriesIndex, dataPointIndex }: any)=> {
                   if(this.appearAllDataLabelInSelect){
                    return  val.toFixed(3);
                   }else{
                    if (dataPointIndex === selectedcolumn && this.isSelectedDataLabelAppear) {
                      return "عدد الحوادث : " + val.toFixed(3); // Display the data label only for the clicked column
                    } else {
                      return ''; // Hide data labels for other columns
                    }
                   }
                  }
                }
              },false,false);
            }
          }
        }
      },
      plotOptions: {
        bar: {
          distributed:true,
          isDumbbell: false,
          columnWidth: 5.5,
          borderRadius:2,
          borderRadiusApplication:"end",
        }
      },
      legend: {
        show: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: 0,
          bottom: 0,
        },  
      },
      xaxis: {
        axisBorder: {
          show:false,
        },
        tickPlacement: "on",
        axisTicks: {
          show:false,
      },
      crosshairs:{
        show:false,
     },
     tooltip: {
      enabled: false,
     },
      },
      yaxis:{
       labels:{
        offsetX:-10,
        formatter(val, opts) {
          return val.toFixed(0)
        },
        style:{
          colors: '#8D9092',
          fontSize: '14px',
          fontFamily: 'Poppins',
          fontWeight: 400,
        }, 
       },
       tooltip: {
        enabled: false,
       },
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
      tooltip:{
        enabled:true,
        fixed: {
          enabled: false,
          position: "top",
          offsetX: 10,
          // offsetY?: number;
      },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
            return val;
        },
        textAnchor: 'middle',
        distributed: true,
        offsetX: 0,
        offsetY: -24,
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
    };

  }

}
