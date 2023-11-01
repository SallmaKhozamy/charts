import { Color } from './../interface/ichart-color';
import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { selected } from '../interface/ichart-color';
import { Colors } from 'chart.js';

@Component({
  selector: 'app-shfaf',
  templateUrl: './shfaf.component.html',
  styleUrls: ['./shfaf.component.css']
})
export class ShfafComponent implements OnInit{
  dataLabelValue: string = 'عدد الحوادث <br>';
  @Input() chartData: string[]= ["فيحاء"," الدرعة","الدمام ","الرياض","جدة","حائل","الباحة"]; 
  @Input() nameOfSeries: string = 'العدد' 
  @Input() columnWidth: string = '15px' 
  @Input() borderRadius: number = 6
  @Input() borderRadiusApplication: "around" | "end" = 'around'
  @Input() colors:string[]= ['#03A677']
  @Input() yAxisData:any= []
  // @Input() yAxisData2:string[] = []
  @Input() selectedColor:string | string[] = this.colors
  @Input() chartHeight: string | number = 250
  @Input() chartWidth:number | string = '100%'
  @Input() dataLabelAppear:boolean = false
  @Input() yAxisTitle: string = ''
  @Input() isSelectedDataLabelAppear=false
  @Input() xAxisTitle: string = '' 
  @Input() dataLabelColor: string = '#027180'
  @Input() isSelectedExecute:boolean = true
  @Input() xAxisBorder = false
  @Input() yAxisBorder = false
  @Input() gridColor:string = '#DCDCDC'
  @Input() gridDash:number = 5
  @Input() gridXaxis:boolean = false
  @Input() gridYaxis:boolean = true
  @Input() xAxisType:"category" | "datetime" | "numeric" ='category'
  @Input() appearAllDataLabelInSelect:boolean = false
  @Input() isAppearDiffYAxis:boolean = true
  // @Input() dataLabelValue:string = 'عدد الحوادث'
  chartOptions!: ApexOptions; 
  ngOnInit(): void {
    
    this.chartOptions  = {
    
      chart:{
        type: 'bar',
        width: this.chartWidth,
        height: this.chartHeight,
        offsetX: -30,
        parentHeightOffset:0,
        toolbar:{show: false},
        events: {
          click:(event, chartContext, config)=> {
          let selectedcolumn = config.dataPointIndex
          if(this.isSelectedExecute) [
            chartContext.updateOptions ({
              colors: selected(selectedcolumn,chartContext.w.globals.labels.length,this.colors,this.selectedColor)}, false, false) 
          ]
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
      series:[ 
        { name: this.nameOfSeries,
          data:this.yAxisData },
      ],
     
      labels: this.chartData,
      colors: this.colors,
      plotOptions:{
        bar:{
          columnWidth: this.columnWidth,
          distributed:true,
          borderRadius: this.borderRadius,
          borderRadiusApplication: this.borderRadiusApplication,
          dataLabels: {
            position: "top", // top, center, bottom
          }
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
      legend: {
       show: false,
      },
      xaxis: {
        type:this.xAxisType,
        labels: {    
          trim: true,  
          hideOverlappingLabels: false,
          rotate: 0,
          
          style: {
            colors: ['#292D30'],
            fontFamily:'Tajawal',
            fontSize: '14px',
            fontWeight: 400, 
          }
        },
       axisTicks: {
        show:false,
       },
       axisBorder: {
        show: this.xAxisBorder,
        color: '#D4D4D4',
        strokeWidth: 1,
        // offsetX: 23,
        offsetY: -1,
      },
      },
      yaxis:
      {
        labels:{
          offsetX: -24,
          formatter: (value: any) => {
              if(this.isAppearDiffYAxis){
              return value + 'K';
            }
             return this.yAxisData
            
            },
        
          style:{
            colors:['#8D9092'],
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
          }
        },
        
        axisBorder: {
          show: this.yAxisBorder,
          color: '#D4D4D4',
          width: 1,
          offsetX: 22,
          offsetY:0,
          
      },
        tickAmount: 4,
        title:{
          text: this.yAxisTitle,
          rotate:0,
          offsetX: 24,
          offsetY:-85,
          style:{
            color: '#292D30',
            fontFamily: 'Tajawal',
            fontSize: '16px',
            fontWeight: 500,
          }
        }
      },
      
      grid:{
        borderColor: this.gridColor,
        strokeDashArray: this.gridDash, 
        xaxis:{
          lines: {
            show: this.gridXaxis,
          }
        },
        yaxis:{
          lines: {
            show: this.gridYaxis,
          }
        },
        padding: {
          top: 0,
          bottom: 0,
        },  
      },

      dataLabels:{
       enabled:this.dataLabelAppear,
       formatter: function (val: any, opts: any) {
        return val.toFixed(3); // You can customize the label format here  
        // return 2
        },
       textAnchor: 'middle',
       distributed: true,
       offsetX: 0,
       offsetY: -24,
       style: {
           fontSize: '12px',
           fontFamily: 'Tajawal',
           fontWeight: '500',
          //  colors:['#027180']
          colors: [this.dataLabelColor]
       },
       background: {
         enabled: true,
         foreColor: '#fff',
         borderRadius: 7,
          borderColor:'',
         padding: 12,
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
   
      },
 
    }
  }


}

