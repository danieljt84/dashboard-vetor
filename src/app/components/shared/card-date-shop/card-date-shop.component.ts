import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitterService } from 'src/app/service/event-emitter.service';

@Component({
  selector: 'app-card-date-shop',
  templateUrl: './card-date-shop.component.html',
  styleUrls: ['./card-date-shop.component.css']
})
export class CardDateShopComponent implements OnInit {
  @ViewChild('mes') mes: ElementRef;
  @ViewChild('ano') ano: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeDateValue(){
    EventEmitterService.get('date-event').emit([this.mes.nativeElement.value as number,this.ano.nativeElement.value as number]);
   }

}
