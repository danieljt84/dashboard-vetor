import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sidebar-toggler').click(function () {
      console.log("oi")
      $('.sidebar, .content').toggleClass("open");
      return false;
  });
  }

}
