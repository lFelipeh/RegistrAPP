import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../services/viajes.service';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { RolUsuarioService } from '../../services/rol-usuario.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  nombreUsuario: string = '';
  correoUsuario: string = '';
  viajes: Viaje[] = [];
  esPasajero: boolean = false;
  esDuenoVehiculo: boolean = false;
  mensajeReservaPasajero: string = '';
  mensajeReservaConductor: string = '';
  correoConductorActual: string = '';

  constructor(
    private viajesService: ViajesService,
    private router: Router,
    private userDataService: UserDataService,
    private rolUsuarioService: RolUsuarioService
  ) { }

  reservar(viaje: Viaje) {
    this.mensajeReservaPasajero = `Confirmación de reserva para el viaje con ${viaje.conductor} hacia ${viaje.destino} a las ${viaje.horaSalida}. Costo: ${viaje.costo}`;
   // this.correoConductorActual = viaje.correoConductor
    this.mensajeReservaConductor = `${this.nombreUsuario} ha reservado un viaje contigo hacia ${viaje.destino} a las ${viaje.horaSalida}.`;
  
    // Logs para depuración
    console.log("Correo del usuario:", this.correoUsuario);
    console.log("Mensaje de reserva para el pasajero:", this.mensajeReservaPasajero);
   // console.log("Correo del conductor:", this.correoConductorActual);
   // console.log("Mensaje de reserva para el conductor:", this.mensajeReservaConductor);
  
    if (this.correoUsuario && this.mensajeReservaPasajero) {
      const formPasajero = document.getElementById('emailFormPasajero') as HTMLFormElement;
      formPasajero.submit();
    }
  
//    if (this.correoConductorActual && this.mensajeReservaConductor) {
//      const formConductor = document.getElementById('emailFormConductor') as HTMLFormElement;
 //     formConductor.submit();
//    }
  }
  

  agregarViaje() {
    this.router.navigateByUrl('/crear-viaje');
  }

  ngOnInit() {
    this.correoUsuario = this.userDataService.getCorreoUsuario();
    this.nombreUsuario = this.userDataService.getNombreUsuario();
    this.viajes = this.viajesService.obtenerViajes();
    this.esPasajero = this.rolUsuarioService.esPasajero();
    this.esDuenoVehiculo = this.rolUsuarioService.esDuenoVehiculo();
  }

  seleccionarRol() {
    this.router.navigateByUrl('/seleccionar-rol');
  }
}
