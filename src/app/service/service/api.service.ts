import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  // Pegando a criptomoeda
  getCurrency(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }
  // Pegando a tendência da criptomoeda
  getTrendingCurrency(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24`);

  }
  // Pegando o dado da criptomoeda para o gráfico
  getGraphicalCurrencyData(coinId: string, currency: string, days: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
  }
  // Pegando o Id da criptomoeda
  getCurrencyById(coinId: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }
}
