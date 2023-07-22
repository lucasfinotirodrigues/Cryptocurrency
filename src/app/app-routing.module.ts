import { CoinDetailComponent } from './pages/coin-detail/coin-detail.component';
import { CoinListComponent } from './pages/coin-list/coin-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'list', component: CoinListComponent
  },
  {
    path: 'detail/:id', component: CoinDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
