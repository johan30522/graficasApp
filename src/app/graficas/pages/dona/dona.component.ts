import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public colors:Color[]=[
  {
    backgroundColor:[
      '#215FF0','#F01219','#C62EF0'
    ]
  }
];

 public doughnutChartData: MultiDataSet = [
   [350, 450, 100]
 ];
 public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
