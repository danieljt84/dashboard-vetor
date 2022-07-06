import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { finalize } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-chart-quantidade-venda-item',
  templateUrl: './chart-quantidade-venda-item.component.html',
  styleUrls: ['./chart-quantidade-venda-item.component.css']
})
export class ChartQuantidadeVendaItemComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  isLoading = false;

  public chartLabels: any = [ ];

  public barChartOptions: ChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  public barChartData: ChartDataset[] = [
    {
      type: 'line',
      label: 'Venda por item',
      data: [],
      order: 1,
    },
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    EventEmitterService.get('date-event').subscribe(()=>this.updateChart());
    this.updateChart();
  }

  updateChart(){
    this.chartLabels = [];
    this.barChartData[0].data = [];
    this.isLoading = true
   this.apiService.getVendaByItem()
   .pipe(finalize(()=> this.isLoading = false ))
   .subscribe(data =>{
       data.forEach(element =>{
        this.barChartData[0].data.push(element.valor);
        this.chartLabels.push(element.date.split('-')[2])
       })
       this.chart.update();
   });
  }

}
