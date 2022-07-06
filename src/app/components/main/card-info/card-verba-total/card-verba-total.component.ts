import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-verba-total',
  templateUrl: './card-verba-total.component.html',
  styleUrls: ['./card-verba-total.component.css']
})
export class CardVerbaTotalComponent implements OnInit {
  valor: number
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getVerbaTotal();
    EventEmitterService.get('date-event').subscribe(()=> this.getVerbaTotal())

  }

  getVerbaTotal(){
    this.apiService.getVerbaTotal().subscribe(data =>{
      this.valor = data
    } )
  }

}
