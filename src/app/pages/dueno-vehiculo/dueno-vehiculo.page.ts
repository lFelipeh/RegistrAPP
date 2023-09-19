import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViajesService } from '../../services/viajes.service';
import { UserDataService } from '../../services/user-data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-dueno-vehiculo',
  templateUrl: './dueno-vehiculo.page.html',
  styleUrls: ['./dueno-vehiculo.page.scss'],
})
export class DuenoVehiculoPage implements OnInit {

  nombreUsuario: string = '';
  public viajeForm: FormGroup;

  constructor(
    private viajesService: ViajesService,
    private userDataService: UserDataService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController
)
   { 
    this.viajeForm = this.formBuilder.group({
      conductor: ['', [Validators.required]],
      horaSalida: ['', [Validators.required]],
      destino: ['', [Validators.required]],
      desde: ['', [Validators.required]],
      costo: ['', [Validators.required, Validators.min(0)]],
      rutaOpcional: [''],
      correoConductor: ['', [Validators.required, Validators.email]],
      asientosTotales: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.nombreUsuario = this.userDataService.getNombreUsuario();
  }

  agregarViaje() {
    if (this.viajeForm.valid) {
      const viajeData = {
        ...this.viajeForm.value,
        asientosReservados: 0
      };
      this.viajesService.agregarViaje(viajeData);
      this.viajeForm.reset();
    }
  }

  seleccionarRol() {
    this.navCtrl.navigateBack('/seleccionar-rol');
  }
}
