import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css']
})
export class LegendComponent {
 @Input() twoLineAppear:boolean = false 
 @Input() labels:string[] = []
 @Input() series:number[] = []
 @Input() colors:string[] = []
}
