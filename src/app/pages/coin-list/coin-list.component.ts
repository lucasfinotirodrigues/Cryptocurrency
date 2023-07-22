import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  bannerData: any = [];
  coin : any
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getAllData();
    // this.getBannerData();
  }

  // getBannerData() {
  //   this.api.getTrendingCurrency("INR")
  //     .subscribe(res => {
  //       console.warn(res, "BannerData");
  //     })
  // }
  getAllData() {
    this.api.getCurrency("INR")
      .subscribe(res => {
        console.warn(res, 'All Data')
        this.bannerData = res
      })
  }

  goToDetails(item: any) {
    this.router.navigate(['detail', item.id]);
  }
}

      // 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true';


     // https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true
