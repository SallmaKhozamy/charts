import { Component, Input, OnInit } from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  @Input() labels:string[] = ['ذكور','اناث']
  @Input() series:number[] = [40, 60]
  @Input() title:string = ''
  @Input() colors:string[] = ['#03A677','#FDBE4A'] 
  @Input() isTotalNumberAppear:boolean = false
  @Input() totalSize:string = '18px'
  @Input() totalWeight:number|string = 500
  @Input() borderAppear:boolean = true 
  @Input() twoLineAppear:boolean = false
  @Input() chartWidth:number = 320
  chartOptions!: ApexOptions; 
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: "donut",
        parentHeightOffset:0,
        // width:this.chartWidth,
        sparkline: { 
          enabled: true 
        },
        animations: {
          enabled: false,
        }
      },
      series: this.series,
      labels: this.labels,
      colors: this.colors,
      dataLabels: {
        enabled: true,
        formatter: function (val:any) {
          return val.toFixed(1) + "%"
        },
        distributed: true,
        textAnchor: 'middle',
        offsetY: 0,
        style: 
          {
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Poppins',
          },
          dropShadow: {
            enabled: false,
        },
        
    },
    stroke: {
      show:true,
      width: 0, // Set the border width
    },
    legend:{
      show: true,
      // width: 70,
      position: 'left',
      fontFamily: 'Tajawal',
      fontWeight: 500,
      fontSize: '15px',
      offsetY: 50,
      // offsetX: 8,
      labels:  {
        colors: '#1E1E1E',
      },
      markers: {
        width: 19,
        height: 19,
        radius: 4,
        offsetX: 7,
        offsetY: 5,
      },
      itemMargin: {
        vertical: 5,
    },
    
    },

    plotOptions: {
      pie: {
        expandOnClick: false,
        donut:{
          // size: '64px',
          labels: {
            show:true,
            name: {
              show: true,
              formatter:(val: any) => {
                if(this.isTotalNumberAppear){
                   return val
                }
                // Split the sentence into words
                const words = val?.split(' ');
                // // Initialize an array to hold the lines
                // const lines: string[] = [];
                // if (words?.length) {
                //   for (let i = 0; i < words.length; i += 1) {
                //     let line = [words[i]];
                //     lines.push(line.join(' '));
                //   }
                // }
                return words;
              },
              
            },
            total: {
              show: true,
              showAlways: true,
              fontFamily: 'Tajawal',
              // fontSize: '18px',
              fontSize: this.totalSize,
              // fontWeight: 500,
              fontWeight: this.totalWeight,
              label: this.title,
              color: '#55565A',
              formatter:(val: any) => {
                let series:[] = val.config.series  
                let sum = 0
                 series.forEach(element => {
                  sum += element
                 });
                  console.log(sum)
                  return `${sum.toFixed(3)}`
                },
            },
            value: {
              show: this.isTotalNumberAppear,
                    fontSize: '17px',
                    fontFamily: 'Tajawal',
                    fontWeight: 500,
                    offsetY: -1,
                    color: '#696969',

            }
          }
        }
      }
    }

    };
  }
}

  
