import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-termometro',
  templateUrl: './chart-termometro.component.html',
  styleUrls: ['./chart-termometro.component.css']
})
export class ChartTermometroComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public chartLabels = ["Red", "Green"];
  public barChartData: ChartDataset[] = [{
    type: 'doughnut',
    data: [20000, 32000],
    backgroundColor: ["Red", "Green"],
    label: '# of Votes',
  }];

  public barChartOptions = {
      rotation: 270,
      circumference: 180,
      cutout: '70%',
      scales: {
        y: {
          beginAtZero: true
        }
      },
    }
  constructor() { }

  ngOnInit(): void {
    }

  }
