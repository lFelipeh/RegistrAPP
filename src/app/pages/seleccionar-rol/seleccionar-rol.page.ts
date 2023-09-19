import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolUsuarioService } from '../../services/rol-usuario.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-seleccionar-rol',
  templateUrl: './seleccionar-rol.page.html',
  styleUrls: ['./seleccionar-rol.page.scss'],
})
export class SeleccionarRolPage implements OnInit {
  nombreUsuario: string = '';
  constructor(
    private userDataService: UserDataService,
    private router: Router,
    private rolUsuarioService: RolUsuarioService
  ) { }

  ngOnInit() {
    this.nombreUsuario = this.userDataService.getNombreUsuario().split('@')[0];
  }

  async seleccionarRol(rol: string) {
    this.rolUsuarioService.seleccionarRol(rol);
  
    if (rol === 'pasajero') {
      this.router.navigateByUrl('/pasajero');
    } else if (rol === 'duenoVehiculo') {
      this.router.navigateByUrl('/dueno-vehiculo');
    }
  }
}
