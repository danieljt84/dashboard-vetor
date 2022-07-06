import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-info-verba-disponivel',
  templateUrl: './card-info-verba-disponivel.component.html',
  styleUrls: ['./card-info-verba-disponivel.component.css']
})
export class CardInfoVerbaDisponivelComponent implements OnInit {

  valor:number;
  isLoading = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVerbaDisponivel();
    EventEmitterService.get('date-event').subscribe(()=> this.getVerbaDisponivel());

  }

  getVerbaDisponivel(){
    this.apiService.getVerbaDisponivel().subscribe(data => this.valor = data);
  }


}
