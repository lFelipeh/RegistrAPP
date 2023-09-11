import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../services/viajes.service';


@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.component.html',
  styleUrls: ['./lista-viajes.component.scss'],
})
export class ListaViajesComponent implements OnInit {
  viajes: Viaje[] = [];

  constructor(private viajesService: ViajesService) { }

  ngOnInit() {
    this.viajes = this.viajesService.obtenerViajes();
  }
}
