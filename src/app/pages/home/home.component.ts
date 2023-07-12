import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currency: any;

  formGroup: FormGroup | undefined;

  cities!: City[];

  selectedCities!: City[];

  ngOnInit() {
    this.currency = [

      { name: 'Bitcoin', code: 'BTN' }
    ]
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }
}
