import { Color } from './../interface/ichart-color';
import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-fill-pie3mlyat',
  templateUrl: './fill-pie3mlyat.component.html',
  styleUrls: ['./fill-pie3mlyat.component.css']
})
export class FillPie3mlyatComponent implements OnInit{
  @Input() series :number[] = []  
  @Input() labels:string[] = []
  @Input() colors:string[] = []
  @Input() legendPosition: "top"|"right"|"bottom"|"left" = "bottom"
  chartOptions!: ApexOptions; 
  ngOnInit(): void {
 this.chartOptions = {
  chart:{
    // offsetX: 130,
    width: 400,
    // offsetY: -85,
    type: 'pie',
    toolbar:{show: false},
  },
 
  stroke: {
    show:true,
    width: 0, // Set the border width
  },
  series: this.series,
  labels: this.labels,
  // colors: ["#03A676","#FDBE4A","#353535","#027180","#035C65"],
  colors: this.colors,
  legend:{
    show: true,
    // offsetY:-80,
    position: this.legendPosition, 
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
      // customScale: 0.6,
      expandOnClick:false,
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
        fontSize: '14px',
        fontFamily: 'Poppins',
        fontWeight: 400,
        colors: ['#fff'],
      },
      dropShadow: {
        enabled: false,
    },
    
},
states:{
  active: {
    filter: {
      type: "none",
    }
  }
}
}
  }
}
