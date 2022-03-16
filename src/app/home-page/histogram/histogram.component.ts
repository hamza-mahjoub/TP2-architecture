import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss']
})
export class HistogramComponent implements OnInit {

  @Input() multi: any[];
  width=1000
  height=400

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Governorate';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Number of people';
  legendTitle: string = 'Types';

  colorScheme = {
    name:"first schema",
    selectable:true,
    group: ScaleType.Linear, 
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width=innerWidth / 1.3;
  }

  constructor() {
    Object.assign(this, { multi:this.multi }) 
  }

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
    this.width=innerWidth / 1.3;
  }
}
