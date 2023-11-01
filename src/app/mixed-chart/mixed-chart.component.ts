import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import { selected } from '../interface/ichart-color';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.css']
})
export class MixedChartComponent implements OnInit{
  @Input() chartData: string[]= ["فيحاء"," الدرعة","الدمام ","الرياض","جدة","حائل","الباحة"]; 
  @Input() nameOfSeries: string = 'العدد' 
  @Input() columnWidth: string = '15px' 
  @Input() borderRadius: number = 6
  @Input() borderRadiusApplication: "around" | "end" = 'around'
  @Input() colors:string[]= ['#03A677']
  @Input() yAxisData:number[] = []
  @Input() yAxisData2:string[] = []
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
      }
    }
  }
  
}
