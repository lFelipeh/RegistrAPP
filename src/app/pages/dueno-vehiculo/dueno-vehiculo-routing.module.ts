import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuenoVehiculoPage } from './dueno-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: DuenoVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuenoVehiculoPageRoutingModule {}
