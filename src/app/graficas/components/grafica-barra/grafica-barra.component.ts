import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {


  @Input() horizontal:boolean=false;
  public barChartOptions: ChartOptions = {
    responsive: true,
    
  };
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  




  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType='horizontalBar';
    }
  }

}
