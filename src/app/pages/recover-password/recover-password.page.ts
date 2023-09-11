import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  email: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async recuperar() {
    if (!this.email) {
      await this.presentAlert('Error', 'Por favor ingresa un correo electrónico.');
      return;
    }

    // Aquí se simula el envío del correo. En una aplicación real, llamarías a un servicio backend.
    console.log(`Correo para restablecer contraseña enviado a: ${this.email}`);
    
    // Mostrar una alerta al usuario notificando el envío del correo.
    await this.presentAlert('Correo enviado', 'Revisa tu correo para restablecer tu contraseña.');
    
    // Redirigir al usuario a la página de inicio de sesión.
    this.router.navigateByUrl('/login');
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
