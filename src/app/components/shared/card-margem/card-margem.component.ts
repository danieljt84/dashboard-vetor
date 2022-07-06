import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ApiService } from 'src/app/service/api.service';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-margem',
  templateUrl: './card-margem.component.html',
  styleUrls: ['./card-margem.component.css']
})
export class CardMargemComponent implements OnInit {

  margem:number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.updateMargem();
    EventEmitterService.get('date-event').subscribe(()=>this.updateMargem());
  }

  updateMargem():any{
    this.apiService.getMargem().subscribe(data => this.margem = data);
  }

}
