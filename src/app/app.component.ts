import { Component, OnInit } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  ngOnInit(): void {
  // this.data.forEach(element => {
  //   this.days.push(element.day)
  //   this.Region.push(element.Region)
  //   this.TotalAccidentsValue.push(element.TotalAccidentsValue)
  // });
  }
  AgeGroup = ['41 - 50','21 - 30','21 - 30','31 - 40','41 - 50']
  NumberOfViolationsByAgeGroupData = [100, 70, 50, 40, 60]
  Nationality = ['مغربي','فلبيني','هندي','سعودي','مصري','ليبي','اماراتي']
  NumberOfViolationsByNationalityData = [100, 70, 50, 40, 60, 80, 50]
  City =  ['فيحاء','الدرعة','الدمام','الرياض','جدة','حائل','الباحة','عرر','نجران']
  NumberOfViolationsByCityData = [100, 70, 50, 40, 60, 90, 60, 40, 70] 
  NumberOfViolationsAffectingPublicSafetyByCity = ['السير علي الطريق في اوقات غير المسموح بها السير','كسر أشاره المرور','القيادة علي سرعة عاليه و كسر قواعد المرور','عدم حمل رخص القيادة أثناء السير او القيادة','عدم الالتزام بحدود المسارات علي الطريق','استخدام الهاتف المحمول أثناء القياد','استخدام الهاتف المحمول أثناء القيادة']
  NumberOfViolationsAffectingPublicSafetyByCityData = [80, 70, 60, 90, 60, 40, 70]
  Months = ['أكتوبر','أغسطس','يوليو','يونيو','مايو','ابريل','مارس','فبراير','يناير']
  IncidentsTemporalDistributionOfIncidentsData = [30, 70, 50, 40, 60, 40, 20, 90, 60]
  Region = ['حائل','الرياض','عسير','جازان','تبوك','مكة']
  TotalAccidentsData = [100.320, 120.947, 36.210, 70.210, 28.120, 96.120]
  NumberOfReportsOfMissingPlatesByCityData = [100.320, 120.947, 36.210, 70.210, 28.120, 96.120]
  NumberOfPlateTheftReportsByCityData = [100.320, 120.947, 36.210, 70.210, 28.120, 96.120]
  type = ["اودي","مرسيدس","بي ام"]
  TheNumberOfVehiclesAccordingToTheTypeOfCarData = [55.200, 155.200, 85.200]
  state = ["منهية","سارية"]
  NumberOfVehiclesByVehicleBrandData = [304.200, 204.200]
  NumberOfDrivingLicensesByAgeGroupData = [100,80,70,60,50]
  NumberOfDrivingLicensesByNationalityData = [90.200,100.320, 120.947, 36.210, 70.210, 28.120, 96.120]
  TotalAccidentsValue:number[]=[120.320,290.984,200,230.34,110,60.50];
  days:string[] = ['السبت','الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة'];
  saudi:number[] =  [100, 200, 90, 120, 161, 200]
  nonSaudi:number[] = [76, 85, 101, 98, 87, 105]
  years:number[] = [2015,2016,2017,2018,2019,2020,2021,2022,2023]
  NumberOfDrivingLicensesByYearMale: number[] = [373,446,230,320,390,290,250,370,180]
  NumberOfDrivingLicensesByYearFemale: number[] = [458,469,340,320,190,170,200,230,250] 
  NumberOfOperationsByLocationSeries = [8.156, 7.746, 11.436, 3.756, 9.796, 6.251, 4.756, 5.123, 10.245]
  NumberOfVehiclesByYearOfManufactureSeries = [10,23,30,40,15,28,34,19,22]
 
  // test
  NumberOfViolationsByAgeGroupData2 = [100, 70, 50, 40, 60,80]
  NumberOfViolationsByAgeGroupData3 = [100, 70, 50, 40, 60,60,80]
  
  
  // basicline
  NumberOfAccidentsByTimeSeries:{name:string,data:number[]}[] = [
    {
   name:'العدد',
   data: [0, 4, 10, 1, 9,5,9, 20 ,10, 5, 30, 10,13]
    },
  ]

  NumberOfAccidentsByTimeLabel:string[] = ['01:00 AM','02:00 AM','03:00 AM','04:00 AM','05:00 AM','06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM',"12:00 PM","01:00 PM",]  

  TotalAccidentsSeries:{name:string,data:number[]}[] = [
    {
   name:'ذكر',
   data: [4, 10, 8,9,5,9]
    },
    {
      name:'أنثي',
      data: [1, 4, 5, 10,7, 20 ]
       },
  ]
  
  NumberOfViolationsByYearSeries:{name:string,data:number[]}[] = [
    {
   name:'العدد',
   data: [100, 74, 85, 70, 78, 20 ,38,69,40]
    }
  ] 

  NumberOfVehiclesAccordingToTheValidityOfValidDrivingLicensesSeries:{name:string,data:number[]}[] = [
    {
   name:'العدد',
   data: [100, 74, 85, 70, 78, 20 ,38,69,40]
    }
  ]  

  NumberOfLicensesByYearOfExpirationSeries:{name:string,data:number[]}[] = [
    {
   name:'العدد',
   data: [100, 74, 85, 70, 78, 20 ,38,69,40]
    }
  ]  

  ViolationsSeries:{name:string,data:number[]}[] = [
    {
   name:'العدد',
   data: [100, 74, 85, 70, 78, 20 ,38,69,40]
    }
  ]  
   
  OperationType:string[] = ['تغيير لوحات المركبة','اصدار بدل تالف لوحتين عادية بدو','اصدار بدل تالف لوحتين طويلة بدو','اعطاء لوحة مركبة لا يوجد لها لوحات','اسقاط اللوحات من المركبة']
  DependingOnTheTypeOfOperation:number[] = [ 20,40,30,10,50]


  //RangeBar Chart 
  NumberOfOperationsByLocationSeriesData:{x:string,y:number[]}[] = [
    {x:this.City[0],y:[0,8.156]},{x:this.City[1],y:[0,7.746]},{x:this.City[3],y:[0,11.436]},{x:this.City[4],y:[0, 9.796]},{x:this.City[5],y:[0, 6.251]},{x:this.City[6],y:[0, 4.756]}
  ]


  // TotalAccidentsValue:number[]=[];
  // Region:string[]=[];

  //  Sample data with days of the week, regions, and values
  // data = [
  //  { day: "السبت", Region: "حائل", TotalAccidentsValue: 10 },
  //  { day: "Tuesday", Region: "الرياض", TotalAccidentsValue: 20 },
  //  { day: "Wednesday", Region: "عسير", TotalAccidentsValue: 15 },
  //  { day: "Thursday", Region: "جازان", TotalAccidentsValue: 25 },
  //  { day: "Friday", Region: "تبوك", TotalAccidentsValue: 30 },
  //  { day: "Friday", Region: "مكة", TotalAccidentsValue: 30 },
  // ];

  // Extract the days of the week for the y-axis labels
  // yLabels = this.days
  // Extract the regions for the x-axis labels
  // xLabels = [...new Set(this.data.map(item => item.Region))]; // Use Set to get unique values

  // Extract the values for data labels
  // dataValues = this.data.map(item => item.TotalAccidentsValue);


  //progress chart
  Gender = [' ذكور', ' إناث']
  DrivingLicensesSeries = [1232.450, 1832.450]
  NumberOfDrivingLicensesByGenderLabels = ['ذكر', 'أنثي']
  NumberOfDrivingLicensesByGenderSeries = [100.960,20.90]
  NumberOfViolationsByGender = [1232.450,1232.450]
  NumberOfVehiclesAccordingToInspectionStatusLabel = ['تم فحصها','غير مفحوصة']
  NumberOfVehiclesAccordingToInspectionStatusSeries = [1232.450, 1232.450]
  
  //fill pie chart
  NumberOfOperationsAccordingToRegistrationType = ["خاص","نقل خاص","نقل عام","تصدير","دراجة ألية"]  
  NumberOfOperationsAccordingToRegistrationTypeSeries = [32.505, 10.550, 7.48, 15.128, 11.562]
  AChartShowingTheAgeGroupAndItsPercentageOfAccidents = ["اقل من 18", "19-30", "31-40", "41-50", "اكبر من 50"]
  AChartShowingTheAgeGroupAndItsPercentageOfAccidentsSeries = [32.505, 10.550, 7.48, 15.128, 11.562]
  RecordedViolationsLabel = ['ورقي','ساهر','باشر']
  RecordedViolationsSeries = [1232.450, 1232.450, 1232.450]

  chartOptions: ApexChart | any = {
      chart: {
          height: 300,
          type: 'bar',
          toolbar: false,
      },
      grid: {
        // Customize the grid lines
        borderColor: '#E0E0E0', // Color of the grid lines
        strokeDashArray: 4,     // Length of dashes in the line
      },
      series: [{
        data: [{
          x: ' ديسمبر',
          y: 6.986,
          
        }, {
          x: 'نوفمبر',
          y: 7.756
        }, {
          x: 'اكتوبر',
          y: 10.686
        }, {
          x: 'سبتمبر',
          y: 4.014
        }, {
          x: 'اغسطس',
          y: 7.716
        }, {
          x: 'يوليو',
          y: 9.106
        }, {
          x: 'يونيو',
          y: 6.156
        }, {
          x: 'مايو',
          y: 5.543
        }, {
          x: 'ابريل',
          y: 9.756
        }, {
          x: 'مارس',
          y: 7.112
        }, {
          x: 'فبراير',
          y: 4.756
        }, {
          x: 'يناير',
          y: 7.726
        }
      ]
      }],
      plotOptions: {
        bar: { 
          columnWidth: '27.59px',
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          }
        }
      },
      colors: ['#03A677'],

      dataLabels: {
        enabled: true,
        formatter: function (val: any, opts: any) {
            return val;
        },
        textAnchor: 'middle',
        distributed: true,
        offsetX: 0,
        offsetY: -24,
        fill: "#1C1C1C",
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

      legend: {
        show: false,
        position: 'top',
      },
      title: {
        text: "إنتهاء التامين حتى نهاية السنة",
        align: "center",
        style: {
           // floating: 0,
          // offsetY: 4,
          fontSize: '20px',
          fontFamily: 'Tajawal',
          fontWeight: '700',
          color: "#013723"
        }
      },
      yaxis: {
        show: true,
        labels: {
         formatter: function (value:any) {
            // Customize the y-axis label format here
            return  value.toFixed(0); // Example: Prefix with "$" and format as a currency
          },
          style: {
            colors: ['#8D9092'],
            fontSize:  '14px',           
            fontFamily: 'Tajawal',
            fontWeight: '400',
            // cssClass: 'apexcharts-xaxis-label',
          },
  
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      position: 'bottom',
        labels: {
          style: {
            colors: ['#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092','#8D9092'],
          }
        }
      },
  }

  chartData: ApexAxisChartSeries | any = [
      {
          name: 'Series 1',
          data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
       
      }
  ];

}

