import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-previsao-venda',
  templateUrl: './card-previsao-venda.component.html',
  styleUrls: ['./card-previsao-venda.component.css']
})
export class CardPrevisaoVendaComponent implements OnInit {

  valor: number
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPrevisaoVenda();
    EventEmitterService.get('date-event').subscribe(()=> this.getPrevisaoVenda())
  }

  getPrevisaoVenda(){
    this.apiService.getPrevisaoVenda().subscribe(data => this.valor = data);
  }
}
