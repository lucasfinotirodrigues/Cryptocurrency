import { Component, OnInit } from '@angular/core';


interface Currency {
  name: string;
  code: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {

  currency!: Currency[] | undefined;
  selectedcurrency: Currency | undefined;
  constructor(){

  }

  ngOnInit() {
    this.currency = [
      { name: 'Real Brasileiro', code: 'INR' },
      { name: 'Dolar Americano', code: 'USD' }
    ]
  }
}
