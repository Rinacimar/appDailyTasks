import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorDaMoedaPageRoutingModule } from './valor-da-moeda-routing.module';

import { ValorDaMoedaPage } from './valor-da-moeda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorDaMoedaPageRoutingModule
  ],
  declarations: [ValorDaMoedaPage]
})
export class ValorDaMoedaPageModule {}
