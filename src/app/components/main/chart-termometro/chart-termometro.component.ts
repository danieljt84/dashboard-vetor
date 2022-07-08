import { Component, OnInit, ViewChild } from '@angular/core';
declare const gauge: any;

@Component({
  selector: 'app-chart-termometro',
  templateUrl: './chart-termometro.component.html',
  styleUrls: ['./chart-termometro.component.css']
})
export class ChartTermometroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    gauge();
    }

  }
