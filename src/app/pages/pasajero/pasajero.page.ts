import { Component, OnInit } from '@angular/core';
import { ViajesService, Viaje } from '../../services/viajes.service';
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
  mensajeReservaPasajero: string = '';
  mensajeReservaConductor: string = '';
  correoConductorSeleccionado: string = '';

  constructor(
    private viajesService: ViajesService,
    private router: Router,
    private userDataService: UserDataService,
    private rolUsuarioService: RolUsuarioService
  ) { }

  async reservar(viaje: Viaje) {
    viaje.asientosReservados += 1;
    const viajes = await this.viajesService.obtenerViajes();
    const viajeIndex = viajes.findIndex(v => v.id === viaje.id);
    viajes[viajeIndex] = viaje;
    await this.viajesService.agregarViaje(viaje);

    this.mensajeReservaPasajero = `Confirmación de reserva para el viaje con ${viaje.conductor} hacia ${viaje.destino} a las ${viaje.horaSalida}. Costo: ${viaje.costo}`;
    this.mensajeReservaConductor = `${this.nombreUsuario} ha reservado un viaje contigo hacia ${viaje.destino} a las ${viaje.horaSalida}.`;
    this.correoConductorSeleccionado = viaje.correoConductor;

    const formPasajero = document.getElementById('emailFormPasajero') as HTMLFormElement;
    formPasajero.submit();

    const formConductor = document.getElementById('emailFormConductor') as HTMLFormElement;
    formConductor.submit();
  }

  agregarViaje() {
    this.router.navigateByUrl('/crear-viaje');
  }

  async ngOnInit() {
    this.correoUsuario = this.userDataService.getCorreoUsuario();
    this.nombreUsuario = this.userDataService.getNombreUsuario();
    this.viajes = await this.viajesService.obtenerViajes();
  }

  seleccionarRol() {
    this.router.navigateByUrl('/seleccionar-rol');
  }
}
