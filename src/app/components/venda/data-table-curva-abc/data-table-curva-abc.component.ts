import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { InfoCurvaABC } from 'src/app/model/infoCurvaABC';
import { ProdutoCurvaABC } from 'src/app/model/produto-curva-abc';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-data-table-curva-abc',
  templateUrl: './data-table-curva-abc.component.html',
  styleUrls: ['./data-table-curva-abc.component.css'],
})
export class DataTableCurvaAbcComponent implements OnInit {
  curvaA: InfoCurvaABC;
  curvaB: InfoCurvaABC;
  curvaC: InfoCurvaABC;
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.updateDataTables();
    EventEmitterService.get('date-event').subscribe(() =>
      this.updateDataTables()
    );
  }

  updateDataTables() {
    this.isLoading = true;
    this.apiService
      .getInfoCurvaAbc()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.curvaA = data[0];
        this.curvaB = data[1];
        this.curvaC = data[2];
      });
  }
}
