import { Injectable } from '@angular/core';

// Definición de la interfaz Viaje
export interface Viaje {
  id: number;
  conductor: string;
  correoConductor: string;
  horaSalida: string;
  destino: string;
  costo: number;
}

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private viajes: Viaje[] = [
    {
      id: 1,
      conductor: 'Juan Pérez',
      correoConductor: 'keziaql@gmail.com', 
      horaSalida: '18:00',
      destino: 'Metro San Miguel',
      costo: 1000
    },
    {
      id: 2,
      conductor: 'Maria Rodríguez',
      correoConductor: 'keziaql@gmail.com',
      horaSalida: '19:00',
      destino: 'Metro Maipú',
      costo: 2000
    },
    {
      id: 3,
      conductor: 'Carlos Soto',
      correoConductor: 'keziaql@gmail.com',
      horaSalida: '20:00',
      destino: 'Metro Grecia',
      costo: 1000
    }
  ];

  constructor() { }

  //obtener la lista de viajes
  obtenerViajes() {
    return this.viajes;
  }

  //agregar un nuevo viaje a la lista
  agregarViaje(viaje: Viaje) {
    this.viajes.push(viaje);
  }
}
