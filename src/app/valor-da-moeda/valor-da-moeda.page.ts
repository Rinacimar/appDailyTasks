import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valor-da-moeda',
  templateUrl: './valor-da-moeda.page.html',
  styleUrls: ['./valor-da-moeda.page.scss'],
})
export class ValorDaMoedaPage{

  public form = [
    { val: 'Dolar', },
    { val: 'Euro'},
    { val: 'Libra'}
  ];  
  
  public cotação(){
    
    var moeda;
  
  }
}
