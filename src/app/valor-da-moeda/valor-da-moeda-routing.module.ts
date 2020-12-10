import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorDaMoedaPage } from './valor-da-moeda.page';

const routes: Routes = [
  {
    path: '',
    component: ValorDaMoedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorDaMoedaPageRoutingModule {}
