import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tela-inicial',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
    {
    path: 'lista-de-compras',
    loadChildren: () => import('./lista-de-compras/lista-de-compras.module').then( m => m.ListaDeComprasPageModule)
  },
  {
    path: 'valor-da-moeda',
    loadChildren: () => import('./valor-da-moeda/valor-da-moeda.module').then( m => m.ValorDaMoedaPageModule)
  },
  {
    path: 'tela-inicial',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
