import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/service/api.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  coinData: any;
  coinId!: string;
  days: number = 1;
  currency: string = "BRL";
  data: any;
  options: any;
  showFullDescription = false;

  constructor(
    private api: ApiService,
    private activateRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(val => {
      this.coinId = val['id'];
    })
    this.getCoinData();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }
  getCoinData() {
    this.api.getCurrencyById(this.coinId)
    .subscribe(res=> {
      this.coinData = res;
      console.warn(this.coinData, "Dados da moeda")
    })
  }
}
