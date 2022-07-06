import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-verba-utilizada',
  templateUrl: './card-verba-utilizada.component.html',
  styleUrls: ['./card-verba-utilizada.component.css']
})
export class CardVerbaUtilizadaComponent implements OnInit {

  valor: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVerbaUtilizada();
    EventEmitterService.get('date-event').subscribe(()=> this.getVerbaUtilizada())

  }

  getVerbaUtilizada(){
    this.apiService.getVerbaUtilizada().subscribe(data => this.valor = data);
  }

}
