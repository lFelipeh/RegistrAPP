import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private username: string = '';

  constructor() { }

  setUsername(email: string) {
    this.username = email.split('@')[0];
  }

  getUsername(): string {
    return this.username;
  }
}
