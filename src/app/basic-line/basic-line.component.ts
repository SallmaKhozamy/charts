import { Component } from '@angular/core';
import {
  ApexOptions,
} from 'ng-apexcharts';


@Component({
  selector: 'app-basic-line',
  templateUrl: './basic-line.component.html',
  styleUrls: ['./basic-line.component.css']
})

export class BasicLineComponent {
    
   chartOptions: ApexOptions = {
    chart: {
      height:210,
      width: 600,
      type: 'line',
      offsetX: -45,
      offsetY: 100,
      toolbar: {
        show: false // Set this to false to hide the toolbar
      },
    },
    colors: ['#2AC064'],
    series: [{
      name:'العدد',
      data: [0, 4, 10, 1, 9,5,9, 20 ,10, 5, 30, 10,13]
    }],
   

    xaxis: {
      labels: {
        rotate: -45,
        offsetY: 35,
        offsetX:-15,
        rotateAlways: true, 
        style: {
          fontFamily: 'Tajawal',
          fontSize: '12px',
          fontWeight: 400,
          colors:'#292D30', 
        }
      },
      categories: [
        '01:00 AM',
        '02:00 AM',
        '03:00 AM',
        '04:00 AM',
        '05:00 AM',
        '06:00 AM',
        '07:00 AM',
        '08:00 AM',
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        "12:00 PM",
        "01:00 PM"
      ],
      // to remove border and ticks in the bottom 
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }, 
    },

    yaxis: {
      tickAmount: 4,
      forceNiceScale: true,
      labels: {
          offsetX: -23,
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
      title: {
        text: '(k) العدد',
        rotate: 0,
        offsetX: 10, 
        offsetY: -65,
        style: {
            color: '#292D30',
            fontSize: '13px',
            fontFamily: 'Tajawal',
            fontWeight: 500,
        },
    },
    },
    // to make point on the line
    markers: {
      size: 3.3,
      colors: ['#FDBE4A'],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    }
  },
  tooltip: {
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
    onDatasetHover: {
      highlightDataSeries: true,
  },
  },
   
    // to make background dashed 
    grid: {
      borderColor: '#E0E0E0', // Color of the grid lines
      strokeDashArray: 10,     // Length of dashes in the line
    },
    title: {
      text: "ت",
      offsetY: -5,
      offsetX:450,
      style: {
        color: '#fff'
      }
    }  
   }
}

