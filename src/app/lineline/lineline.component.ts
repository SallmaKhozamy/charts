import {  Color, labelColor, selected } from './../interface/ichart-color';
import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-lineline',
  templateUrl: './lineline.component.html',
  styleUrls: ['./lineline.component.css']
})
export class LinelineComponent implements OnInit{
  ngOnInit(): void {
   
    //will remove from here and move to select on selected
//     if(this.chartOptions.colors && this.chartOptions.labels){
//     this.chartOptions.colors=selected(6,this.chartOptions.labels.length);
 
// }
   
  }   

  chartOptions: ApexOptions  = {

    chart:{
      type: 'bar',
      height: 250,
      toolbar:{show: false},
      events: {
        click:  function (event, chartContext, config) {
            
        //chartContext.updateOptions(colors)
       // console.log(chartContext.global.colors)
        console.log(chartContext);
        console.log(config.config.dataLabels.enabled);
        console.log("salma")
        console.log(chartContext.w.globals.colors[1]);
        let selectedcolumn = config.dataPointIndex
        let enable = config.config.dataLabels.enabled
        let color = chartContext.w.globals.colors[selectedcolumn] == "#03A676"
        console.log(selectedcolumn);
        
        // console.log(chartContext.updateOptions);
        console.log(chartContext.w.globals.colors[selectedcolumn])
        chartContext.updateOptions ({
          colors: selected(selectedcolumn,chartContext.w.globals.labels.length,'#03a676','#FDBE4A'),
          dataLabel:{enable:true} 
          }, true, true);
        },
      },
    },
    series:[ 
      { 
        data: [55, 40, 70, 30, 56, 40, 50] }
    ],
    labels: ["فيحاء"," الدرعة","الدمام ","الرياض","جدة","حائل","الباحة"],
    colors:["#03A676"],
    plotOptions:{
      bar:{
        columnWidth: '17px',
        distributed:true,
        borderRadius: 7,
        dataLabels: {
          position: "top", // top, center, bottom
        }
      },
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      }
    },
    legend: {
     show: false,
    },
    xaxis: {
      categories:[
        "فيحاء",
        " الدرعة",
        "الدمام ",
        "الرياض",
        "جدة",
        "حائل",
        "الباحة",
      ],
      labels: {
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
      show: false
    },
    },
    yaxis:{
      labels:{
        offsetX: -23,
        formatter: function (value: any) {
          return value + 'K';
        },
        style:{
          colors:['#8D9092'],
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 400,
        },
      },
      
      tickAmount: 4,
      title:{
        text: "العدد",
        rotate:0,
        offsetX: 23,
        offsetY:-110,
        style:{
          color: '#292D30',
          fontFamily: 'Tajawal',
          fontSize: '14px',
          fontWeight: 500,
        }
      }
    },
    grid:{
      borderColor: '#E0E0E0', 
      strokeDashArray: 5,   
    },
    dataLabels:{
     enabled:false,
     formatter: function (val: any, opts: any) {
      return val.toFixed(3); // You can customize the label format here  
      },
     textAnchor: 'middle',
     distributed: true,
     offsetX: 0,
     offsetY: -24,
     style: {
         fontSize: '12px',
         fontFamily: 'Tajawal',
         fontWeight: '500',
         colors:['#027180']
     },
     background: {
       enabled: true,
       foreColor: '#fff',
       borderRadius: 7,
       borderColor:'',
       padding: 10,
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
