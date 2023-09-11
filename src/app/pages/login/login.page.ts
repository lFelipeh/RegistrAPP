import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserDataService } from '../../services/user-data.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  authForm: FormGroup;

  constructor(
    private alertService: AlertService,
    private alertController: AlertController,
    private navCtrl: NavController,
    private userDataService: UserDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.,;]).{8,}$/;
    if (control.value && !passwordRegex.test(control.value)) {
      return { 'passwordInvalid': true };
    }
    return null;
  }

  async login() {
    if (this.authForm.get('password')?.hasError('passwordInvalid')) {
      this.presentAlert('Error', 'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial (como . , ; @ $ ! % * ? & #).');
    } else {
      this.userDataService.setUsername(this.authForm.get('email')?.value || '');
      this.navCtrl.navigateForward('/seleccionar-rol');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToRecoverPassword() {
    this.navCtrl.navigateForward('/recover-password');
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.userDataService.setUsername(this.authForm.get('email')?.value || '');
      this.router.navigateByUrl('/welcome');  // Redirigimos al usuario a la página de bienvenida.
    } else {
      this.alertService.presentAlert('Error', 'El correo electrónico o la contraseña no son válidos.', ['OK']);
    }
    
    this.login();
  }
}
