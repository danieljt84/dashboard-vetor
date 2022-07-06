import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { MargemSecao } from 'src/app/model/margem-secao';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-data-table-margem-setor',
  templateUrl: './data-table-margem-setor.component.html',
  styleUrls: ['./data-table-margem-setor.component.css'],
})
export class DataTableMargemSetorComponent implements OnInit {
  values: MargemSecao[] = [];
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.updateDataTable();
    EventEmitterService.get('date-event').subscribe(() =>
      this.updateDataTable()
    );
  }

  updateDataTable(): any {
    this.isLoading = true;
    this.apiService
      .getMargemBySecao()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => (this.values = data));
  }
}
