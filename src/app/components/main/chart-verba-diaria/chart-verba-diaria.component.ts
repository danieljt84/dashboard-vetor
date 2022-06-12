import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart-verba-diaria',
  templateUrl: './chart-verba-diaria.component.html',
  styleUrls: ['./chart-verba-diaria.component.css']
})
export class ChartVerbaDiariaComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      }
    },
    scales: {
      y: {
        ticks: {
        },
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: true,
          lineWidth: 5,

        }
      },
      x: {
        beginAtZero: true,
        grid: {
          lineWidth: 5,
          drawOnChartArea: false,
          drawBorder: false
        }
      }
    }
  }

  public chartLabels = ['1', '2', '3', '4','5','6','7','8','9','10',
  '11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  public barChartData: ChartDataset[] = [
    {
      barThickness: 40,
      backgroundColor: '#2E59A7',
      data: [100, 80, 60, 40, 20,40,80,34,67,89,43,65,45,43,43,67,88,12,45,65,45,65,34,34,43 ],
      label: 'Series A',
      indexAxis: 'x',
      order:2
    },{
      type: 'line',
      label: 'Line Dataset',
      data: [40, 90, 30, 100,40, 90, 30, 100,40, 90, 30, 100,40, 90, 30, 100,40, 90, 30, 100,40, 90, 30, 100,40, 90, 30, 100],
      order:1
    }
  ];


  constructor() { }

  ngOnInit(): void {
    }

  }
