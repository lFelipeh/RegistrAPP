import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DuenoVehiculoPageRoutingModule } from './dueno-vehiculo-routing.module';
import { DuenoVehiculoPage } from './dueno-vehiculo.page';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DuenoVehiculoPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [DuenoVehiculoPage]
})
export class DuenoVehiculoPageModule {}
