import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolUsuarioService {
  private rol: 'pasajero' | 'duenoVehiculo' | null = null;

  constructor() { }

  establecerRol(rol: 'pasajero' | 'duenoVehiculo'): void {
    this.rol = rol;
  }

  obtenerRol(): 'pasajero' | 'duenoVehiculo' | null {
    return this.rol;
  }

  esPasajero(): boolean {
    return this.rol === 'pasajero';
  }

  esDuenoVehiculo(): boolean {
    return this.rol === 'duenoVehiculo';
  }
}
