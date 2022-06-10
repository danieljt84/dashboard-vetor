import { Component, OnInit } from '@angular/core';
import { ChartDataset,ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-verba',
  templateUrl: './chart-verba.component.html',
  styleUrls: ['./chart-verba.component.css']
})
export class ChartVerbaComponent implements OnInit {
  public chartLabels = ['semana 1', 'semana 2', 'semana 3', 'semana 4'];
  public barChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  public barChartData: ChartDataset[] = [
    {
      barThickness: 35,
      backgroundColor: '#2E59A7',
      type: 'bar',
      label: 'Bar Dataset',
      data: [20000, 32000, 18000, 40000],
      indexAxis: 'x',
      order: 2
    }, {
      type: 'line',
      label: 'Line Dataset',
      data: [18000, 35000, 20000, 30000],
      order:1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
