import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartDataset, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { finalize } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-chart-faturamento',
  templateUrl: './chart-faturamento.component.html',
  styleUrls: ['./chart-faturamento.component.css'],
})
export class ChartFaturamentoComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: any;
  isLoading = false;
  public barChartOptions: any = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          lineWidth: 5,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          lineWidth: 5,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
  };
  public chartLabels = ['Loja 1', 'Loja 2', 'Loja 3', 'Loja 4', 'Loja 5'];
  public barChartData: ChartDataset[] = [
    {
      barThickness: 35,
      backgroundColor: '#2E59A7',
      data: [],
      label: 'Faturamento',
      stack: 'Stack 0',
      indexAxis: 'y',
    },
    {
      barThickness: 35,
      backgroundColor: '#FD8A5E',
      data: [],
      label: 'custo',
      stack: 'Stack 1',
      indexAxis: 'y',
    },
  ];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    EventEmitterService.get('date-event').subscribe(() => this.generateData());
    this.generateChartLabels();
    this.generateData();
  }

  generateChartLabels() {
    this.chartLabels = ['Loja 1'];
  }
  generateData() {
    this.isLoading = true;
    this.apiService
      .getFaturamentoCustoByDate()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.barChartData[0].data = [];
        this.barChartData[0].data.push(data.faturamento);
        this.barChartData[1].data = [];
        this.barChartData[1].data.push(data.custo);
        this.chart.update();
      });
  }
}
