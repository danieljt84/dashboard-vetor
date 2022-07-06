import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { finalize } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-chart-verba',
  templateUrl: './chart-verba.component.html',
  styleUrls: ['./chart-verba.component.css'],
})
export class ChartVerbaComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  isLoading = false;

  public chartLabels = [
    'semana 1',
    'semana 2',
    'semana 3',
    'semana 4',
    'semana 5',
  ];
  public barChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  public barChartData: ChartDataset[] = [
    {
      barThickness: 35,
      backgroundColor: '#2E59A7',
      type: 'bar',
      label: 'Verba Total',
      data: [],
      indexAxis: 'x',
      order: 2,
    },
    {
      type: 'line',
      label: 'Verba Utilizada',
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

  updateChart() {
    this.isLoading = true;
    this.apiService
      .getVerbaTotalByWeekVersusVerbaUtilizadaByWeek()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.barChartData[0].data = [];
        this.barChartData[1].data = [];
        data.forEach((element, index) => {
          this.barChartData[0].data.push(element.verbaTotal);
          this.barChartData[1].data.push(element.verbaUtilizada);
        });
        this.chart.update();
      });
  }
}
