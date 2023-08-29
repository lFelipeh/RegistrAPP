import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  authForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private userDataService: UserDataService
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async showPasswordErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Contraseña incorrecta. ¿Desea recuperar su contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Recuperar',
          handler: () => {
            this.router.navigate(['/forgot-password']);
          },
        },
      ],
    });

    await alert.present();
  }

  onSubmit() {
    if (this.authForm.valid) {
      if (this.authForm.value.password === 'error') {
        this.showPasswordErrorAlert();
      } else {
        let username = this.authForm.get('email')!.value.split('@')[0];
        this.userDataService.setUsername(username);
        this.router.navigate(['/welcome']);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
