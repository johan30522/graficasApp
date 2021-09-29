import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';
import { Redes } from '../../interfaces/redes';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
public redesSociales:Redes[]=[];
// Doughnut
public doughnutChartLabels: Label[] = [
 // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
];
public colors:Color[]=[
  {
    backgroundColor:[
      '#215FF0','#F01219','#C62EF0','#215FF0','#F01219','#C62EF0'
    ]
  }
];

 public doughnutChartData: MultiDataSet = [
 // [350, 450, 100]
 ];
 public doughnutChartType: ChartType = 'doughnut';


  constructor(private readonly redesServ:GraficasService) { }

  ngOnInit(): void {
    this.redesServ.getFormatedValuesRedes()
      .subscribe(({labels,valores})=>{
        //console.log(result);
        // this.redesSociales=result;

        // const labels=Object.keys(result);
        // console.log(labels);
         this.doughnutChartLabels=[labels];

        // const valores=Object.values(result);

        // console.log(valores.map(Number));
         this.doughnutChartData=[valores]

      })
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
