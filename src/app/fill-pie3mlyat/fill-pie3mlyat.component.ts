import { Color } from './../interface/ichart-color';
import { Component } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-fill-pie3mlyat',
  templateUrl: './fill-pie3mlyat.component.html',
  styleUrls: ['./fill-pie3mlyat.component.css']
})
export class FillPie3mlyatComponent {
  chartOptions: ApexOptions  = {
    chart:{
      offsetX: 130,
      offsetY: -85,
      type: 'pie',
      toolbar:{show: false},
    },
   
    stroke: {
      show:true,
      width: 0, // Set the border width
    },
    series: [32.505, 10.550, 7.48, 15.128, 11.562],
    labels: ["خاص","نقل خاص","نقل عام","تصدير","دراجة ألية"],
    colors: ["#03A676","#FDBE4A","#353535","#027180","#035C65"],
    legend:{
      show: true,
      offsetY:-80,
      position: "bottom", 
      fontSize: '13px',
      fontFamily: 'Tajawal',
      fontWeight: 400,
      labels:  {
        colors: '#8D9092',
      },
      markers: {
        radius: 3,
        offsetX: 5,
      },
      itemMargin: {
        horizontal: 8,
    },
    },
    markers:{
      shape: 'square',
    },
    plotOptions: {
      pie: {
        customScale: 0.6,
        dataLabels: {
          offset: -35, // Offset for labels
          // minAngleToShowLabel: 10, // Set a minimum angle to show labels (in degrees)
        },
        donut:{
          labels:{
            value: {
              color: '#000', // Text color of the data label
              fontSize: '16px', // Font size of the data label
              offsetY: 0, // Offset the label vertically
            },
          }
        }
        
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val:any) {
        return val.toFixed(3) 
      },
      style: 
        {
          fontSize: '21px',
          fontFamily: 'Poppins',
          fontWeight: 400,
          colors: ['#fff'],
        },
        dropShadow: {
          enabled: false,
      },
      
  },
  }
}
