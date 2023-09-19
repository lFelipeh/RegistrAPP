import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Viaje {
  id: number;
  conductor: string;
  correoConductor: string;
  horaSalida: string;
  desde: string;
  destino: string;
  rutaOpcional: string;
  costo: number;
  asientosTotales: number;
  asientosReservados: number;
}

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async obtenerViajes(): Promise<Viaje[]> {
    const viajes = await this._storage?.get('viajes');
    return viajes || [];
  }

  async agregarViaje(viaje: Viaje) {
    const viajes = await this.obtenerViajes();
    viajes.push(viaje);
    return this._storage?.set('viajes', viajes);
  }

  async reservarViaje(conductor: string, horaSalida: string): Promise<boolean> {
    const viajes = await this.obtenerViajes();
    const viajeIndex = viajes.findIndex(v => v.conductor === conductor && v.horaSalida === horaSalida);

    if (viajeIndex !== -1 && viajes[viajeIndex].asientosTotales > viajes[viajeIndex].asientosReservados) {
      viajes[viajeIndex].asientosReservados++;
      await this._storage?.set('viajes', viajes);
      return true;
    }
    return false;
  }
}
