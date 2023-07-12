import { Component, OnInit } from '@angular/core';

interface Currency {
  name: string;
  code: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currency!: Currency[] | undefined;
  selectedcurrency: Currency | undefined;
  constructor(){

  }

  ngOnInit() {
    this.currency = [
      { name: 'Rupia Indiana', code: 'INR' },
      { name: 'Dolar Americano', code: 'USD' }
    ]
  }
}
