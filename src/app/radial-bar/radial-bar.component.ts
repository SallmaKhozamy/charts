import { Component, Input, OnInit } from '@angular/core';
import { ApexChart, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-radial-bar',
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.css']
})
export class RadialBarComponent implements OnInit{

  @Input() series:number[] = [80.360, 69.30, 80.230, 93.32]
  @Input() labels:string[] = ['منطقة الرياض','منطقة القصيم','منطقة عسير','منطقة تبوك']
  @Input() colors:string[] = ['#FE6E73','#08AAD2','#00D4FF','#00D4FF']
   chartOptions!: ApexOptions; 
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        height: 350,
        type: "radialBar",
        parentHeightOffset:0,
      
        sparkline:{
          enabled:true
        },
      },
      
      labels: this.labels,
      series: this.series,
      colors: this.colors,
      plotOptions: {
        radialBar: {
          hollow: {
            size: "25%",
            background: "#03A676",
            position: "front",
            dropShadow: {
              enabled: true,
              color: '#484949',
              top: 1,
              left: 1,
              blur: 5,
              opacity: 0.5
            }
        },
          dataLabels: {
            name: {
              show:true,
              fontSize: "12px",
              offsetY: -3,
              // formatter:(val: any){
              //      return val }
            },
            value: {
              show: true,
              fontSize: '12px',
              fontFamily: 'Tajawal',
              fontWeight: 700,
              color: '#FFF', 
              offsetY: -1,
            },
            total: {
              show: true,
              fontFamily: 'Tajawal',
              fontSize: '12px',
              fontWeight: 700,
              color: "#FFF",
              label: "المجموع",
              formatter:(val:any) => {
                console.log(val)
                let series = val.config.series
                let sum = 0
                series.forEach((element: number) => {
                  sum += element
                });
                return `${sum}`
              }
            }
          },
          
        }
      },
      stroke: {
        lineCap: "round"
      },
      states: {
        active: {
          filter: { type:"none", }
        }
      },
      legend:{
        show: true,
        position: "right",
        fontSize: '13px',
        fontFamily: 'Tajawal',
        fontWeight: 700,
        labels: {
            colors: '#55565A',
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
      // fill: {
      //   type: "gradient",
      //   gradient: {
      //     shade: "dark",
      //     type: "horizontal",
      //     shadeIntensity: 0.5,
      //     gradientToColors: ["#ABE5A1"],
      //     inverseColors: true,
      //     opacityFrom: 1,
      //     opacityTo: 1,
      //     stops: [0, 100]
      //   }
      // },
    };
  }

}
