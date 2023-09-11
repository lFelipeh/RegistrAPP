import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private correoUsuario: string = '';
  private nombreUsuario: string = '';
  private rol: string = '';

  constructor() { }

  setUsername(email: string) {
    this.correoUsuario = email;
    this.nombreUsuario = email.split('@')[0];
  }

  getCorreoUsuario(): string {
    return this.correoUsuario;
  }

  getNombreUsuario(): string {
    return this.nombreUsuario;
  }

  setRol(rol: string) {
    this.rol = rol;
  }
  
  getRol(): string {
    return this.rol;
  }
}
