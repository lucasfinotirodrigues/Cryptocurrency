import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currency: any;

  formGroup: FormGroup | undefined;

  ngOnInit() {
    this.currency = [
      { name: 'Bitcoin', code: 'BTN' }
    ]
  }
}
