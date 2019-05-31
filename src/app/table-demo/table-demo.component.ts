import { Component, OnInit } from '@angular/core';
import { orders } from './_orders';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {

  orders = orders;
  constructor() { }

  ngOnInit() {
  }

}
