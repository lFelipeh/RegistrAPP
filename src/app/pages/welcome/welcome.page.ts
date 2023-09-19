import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { RolUsuarioService } from '../../services/rol-usuario.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  nombreUsuario: string = '';
  email: string = '';
  viajes: Viaje[] = [];
  esPasajero: boolean = false;
  esDuenoVehiculo: boolean = false;

  constructor(
     private viajesService: ViajesService,
     private router: Router,
     private userDataService: UserDataService,
     private rolUsuarioService: RolUsuarioService
  ) { } 

  reservar(viaje: Viaje) {
    alert(`Reserva confirmada para el viaje a ${viaje.destino}. Se ha enviado una confirmación a tu correo y al dueño del vehículo.`);
  }

  agregarViaje() {
    this.router.navigateByUrl('/crear-viaje');
  }

  async ngOnInit() {
    this.email = await this.userDataService.getNombreUsuario();
    this.nombreUsuario = this.email.split('@')[0];
    console.log("Nombre de usuario procesado:", this.nombreUsuario);
    console.log("Email obtenido del servicio:", this.email);
    this.viajes = await this.viajesService.obtenerViajes();
    this.esPasajero = this.rolUsuarioService.esPasajero();
    this.esDuenoVehiculo = this.rolUsuarioService.esDuenoVehiculo();
  }
}
