import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  @Input() single: any[];
  view: any[] = [700, 400];
  width = 700
  height = 400
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    name:"first schema",
    selectable:true,
    group: ScaleType.Quantile, 
    domain: ['#FF0000','#E67451','#FCDFFF','#7D0552','#C12267','#9932CC','#C7A317','#A0522D','#00FFFF','#52D017','#FFA62F','#0000FF','#00008B','#ADD8E6','#B4CFEC','#98AFC7','#B4CFEC','#800080','#FFFF00','#00FF00','#FF00FF','#FFC0CB','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width=innerWidth / 1.3;
  }

  constructor() {
    Object.assign(this, { single:this.single });
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
