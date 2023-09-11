import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViajesService } from '../../services/viajes.service';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dueno-vehiculo',
  templateUrl: './dueno-vehiculo.page.html',
  styleUrls: ['./dueno-vehiculo.page.scss'],
})
export class DuenoVehiculoPage implements OnInit {
  nombreUsuario: string = '';
  viajeForm: FormGroup;
  

  constructor(
    private userDataService: UserDataService,
    private formBuilder: FormBuilder,
    private viajesService: ViajesService,
    private router: Router
  ) {
    this.viajeForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      horaSalida: ['', Validators.required],
      destino: ['', Validators.required],
      costo: ['', [Validators.required, Validators.min(1), Validators.max(10000)]]
    });
  }

  ngOnInit() {
    const email = this.userDataService.getNombreUsuario();
    this.nombreUsuario = email.split('@')[0];
  }

  agregarViaje() {
    if (this.viajeForm.valid) {
      const nuevoViaje = {
        id: Date.now(),
        conductor: this.viajeForm.value.nombre,
        ...this.viajeForm.value
      };

      this.viajesService.agregarViaje(nuevoViaje);
      this.viajeForm.reset();
    }
  }

  seleccionarRol() {
    this.router.navigateByUrl('/seleccionar-rol');
  }
}
