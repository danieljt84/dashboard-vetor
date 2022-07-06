import { Component, OnInit } from '@angular/core';
import jquery from 'jquery';
import { CardComponent } from './card/card.component';
import * as $ from 'jquery';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitterService } from 'src/app/service/event-emitter.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  model: NgbDateStruct;


  constructor() { }

  ngOnInit(): void {
   }

}
