import { ChartOptions } from 'chart.js/auto';
import { selected, Color } from './../interface/ichart-color';
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
  @Input() titleTwoLineAppear:boolean = true
  @Input() secondTitle:string = ''
  chartOptions!: ApexOptions; 

  onChartMounted(chart: any) {
    chart.container.addEventListener('mouseenter', () => {
      chart.w.globals.labels.forEach((label: any) => {
        console.log(label.text);
        
        label.text = label.text.replace(' ', '\n');
        console.log('label ',label.text);
        
      });
    });

    chart.container.addEventListener('mouseleave', () => {
      chart.w.globals.labels.forEach((label: any) => {
        label.text = label.text.replace('\n', ' ');
      });
    });
  }

  ngOnInit(): void {
    this.chartOptions = {

      chart: {
        stacked: false,
        type: "donut",
        width:this.chartWidth,
        parentHeightOffset:0,
        sparkline: { 
          enabled: false 
        },
        brush: {
          enabled: false,
        },
        zoom: { enabled:false },
        selection: { enabled: false},
        animations: {
          enabled: false,
        }, 
    
      redrawOnParentResize:false,
      redrawOnWindowResize: false,
      },
      series: this.series,
      labels: this.labels,
      colors: this.colors,
      tooltip: {
          enabled: true,
          fillSeriesColor: false,
          theme: "light",
          onDatasetHover: {
            highlightDataSeries: true,
        },
        },
      dataLabels: {
          enabled: true,
          distributed: true,
          formatter: function (val:any) {
            return val.toFixed(1) + "%"
          },
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
                  console.log('val',val);
                  
                  if(this.isTotalNumberAppear){
                    return val
                  }
                  // Split the sentence into words
                  const words = val?.split(' ');
                  return words;
                  // return val
                },
                
              },
              total: {
                show: true,
                showAlways: true,
                fontFamily: 'Tajawal',
                fontSize: this.totalSize,
                fontWeight: this.totalWeight,
                label: this.title,
                color: '#55565A',
                formatter:(val: any) => {
                  if(this.titleTwoLineAppear)
                  {
                    return this.secondTitle
                  }
                  let series:[] = val.config.series  
                  let sum = 0
                  series.forEach(element => {
                    sum += element
                  });
                    return `${sum.toFixed(3)}`
                  },
              },
              value: {
                show: true,
                      fontSize: '17px',
                      fontFamily: 'Tajawal',
                      fontWeight: 500,
                      offsetY: -1,
                      color: '#696969',
              }
            }
          }
        }
      },
      forecastDataPoints: {
        strokeWidth: 0,
      },
      states:{
      //   normal: {
      //     filter: {
      //         type:"none",
      //     },
      // },
      // hover: {
      //     filter: {
      //         type: "none",
      //     },
      // },
      active: {
          filter: {
              type: "none",
          },
      },
      },

    };
  }
}

  
