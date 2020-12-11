import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.page.html',
  styleUrls: ['./lista-de-compras.page.scss'],
})
export class ListaDeComprasPage {
  
  public form = [
    { val: 'Alface', isChecked: false },
    { val: 'Cenoura', isChecked: false },
    { val: 'Tomate', isChecked: false },
    { val: 'Arroz', isChecked: false },
    { val: 'Feijão', isChecked: false },
    { val: 'Óleo', isChecked: false },
    { val: 'Azeite', isChecked: false },
    { val: 'Manteiga', isChecked: false },
    { val: 'Queijo', isChecked: false },
    { val: 'Papel Higienico', isChecked: false },
    { val: 'Detergente', isChecked: false }
  ];  
}
