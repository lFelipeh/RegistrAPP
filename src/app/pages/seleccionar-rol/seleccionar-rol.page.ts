import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-rol',
  templateUrl: './seleccionar-rol.page.html',
  styleUrls: ['./seleccionar-rol.page.scss'],
})
export class SeleccionarRolPage implements OnInit {
  nombreUsuario: string = '';

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) { }

  ngOnInit() {
    const email = this.userDataService.getNombreUsuario();
    this.nombreUsuario = email.split('@')[0];
  }

  seleccionarRol(rol: string) {
    if (rol === 'pasajero') {
      this.router.navigateByUrl('/pasajero');
    } else {
      this.router.navigateByUrl('/dueno-vehiculo');
    }
  }
}
