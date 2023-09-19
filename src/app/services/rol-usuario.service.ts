import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class RolUsuarioService {

  private _storage: Storage | null = null;
  private rolSeleccionado: string = '';

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  esPasajero(): boolean {
    return this.rolSeleccionado === 'pasajero';
  }

  esDuenoVehiculo(): boolean {
    return this.rolSeleccionado === 'duenoVehiculo';
  }

  seleccionarRol(rol: string) {
    this.rolSeleccionado = rol;
    if (this._storage) {
      this._storage.set('rol', rol);
    }
  }

  async getRol(): Promise<string | null> {
    if (this._storage) {
      return await this._storage.get('rol');
    }
    return null;
  }
}
