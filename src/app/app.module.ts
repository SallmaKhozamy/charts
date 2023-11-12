import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProgressComponent } from './progress/progress.component';
import { ThirdprogComponent } from './thirdprog/thirdprog.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BasicLineComponent } from './basic-line/basic-line.component';
import { Elfa2aEl3omryaComponent } from './elfa2a-el3omrya/elfa2a-el3omrya.component';
import { FillPie3mlyatComponent } from './fill-pie3mlyat/fill-pie3mlyat.component';
import { LinelineComponent } from './lineline/lineline.component';
import { ShfafComponent } from './shfaf/shfaf.component';
import { TestComponent } from './test/test.component';
import { MixedChartComponent } from './mixed-chart/mixed-chart.component';
import { DoubleChartComponent } from './double-chart/double-chart.component';
import { LegendComponent } from './legend/legend.component';
import { RadialBarComponent } from './radial-bar/radial-bar.component';
import { ProgressJsChartComponent } from './progress-js-chart/progress-js-chart.component';
import { RangeBarComponent } from './range-bar/range-bar.component';
import { StatisticsVehiclesComponent } from './statistics-vehicles/statistics-vehicles.component';
// import * as ApexCharts from 'apexcharts';
// import{ApexCharts} from 'apexcharts'
@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    ThirdprogComponent,
    LinechartComponent,
    BasicLineComponent,
    Elfa2aEl3omryaComponent,
    FillPie3mlyatComponent,
    LinelineComponent,
    ShfafComponent,
    TestComponent,
    MixedChartComponent,
    DoubleChartComponent,
    LegendComponent,
    RadialBarComponent,
    ProgressJsChartComponent,
    RangeBarComponent,
    StatisticsVehiclesComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    NgChartsModule,
    // ApexCharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
