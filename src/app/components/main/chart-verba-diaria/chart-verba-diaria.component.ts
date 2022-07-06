import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { finalize } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-chart-verba-diaria',
  templateUrl: './chart-verba-diaria.component.html',
  styleUrls: ['./chart-verba-diaria.component.css'],
})
export class ChartVerbaDiariaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  isLoading = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        ticks: {},
        grid: {
          drawBorder: false,
          drawOnChartArea: false,
          display: true,
          lineWidth: 1,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          lineWidth: 1,
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
  };

  public chartLabels: any[] = [];
  public barChartData: ChartDataset[] = [
    {
      barThickness: 20,
      backgroundColor: '#2E59A7',
      data: [],
      type: 'bar',
      label: 'Verba Utilizada',
      indexAxis: 'x',
      order: 2,
    },
    {
      type: 'line',
      label: 'Verba Total',
      data: [],
      order: 1,
    },
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    EventEmitterService.get('date-event').subscribe(() => {
      this.updateChart();
    });
    this.updateChart();
  }

  updateChart(): void {
    this.isLoading = true;
    this.apiService
      .getVerbaTotalByWeekVersusVerbaUtilizadaByDay()
      .pipe(finalize((() =>this.isLoading = false)))
      .subscribe((data) => {
        this.chartLabels = [];
        this.barChartData[0].data = [];
        this.barChartData[1].data = [];
        data.forEach((element) => {
          this.chartLabels.push(element.day);
          this.barChartData[0].data.push(element.verbaUtilizada);
          this.barChartData[1].data.push(element.verbaTotal);
        });
        this.chart.update();
      });
  }
}
