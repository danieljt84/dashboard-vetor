import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataset } from 'chart.js';
import {} from 'ng2-charts';

@Component({
  selector: 'app-chart-faturamento',
  templateUrl: './chart-faturamento.component.html',
  styleUrls: ['./chart-faturamento.component.css'],
})
export class ChartFaturamentoComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    indexAxis:'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      }
    },
    scales:{
      y:{
        grid:{
          drawBorder:false,
          drawOnChartArea:false,
          display:true,
          lineWidth:5
        }
      },
      x:{
        beginAtZero: true,
         grid:{
          lineWidth:5,
          drawOnChartArea:false,
          drawBorder:false
         }
      }
    }

  };
  public chartLabels = ['Loja 1', 'Loja 2', 'Loja 3', 'Loja 4', 'Loja 5'];
  public barChartData: ChartDataset[] = [
    {
      barThickness: 35,
      backgroundColor: '#2E59A7',
      data: [100, 80, 60, 40, 20, 0, 0],
      label: 'Series A',
      indexAxis: 'y',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
