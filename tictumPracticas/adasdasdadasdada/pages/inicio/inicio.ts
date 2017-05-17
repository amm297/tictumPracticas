import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion';
import { AutenticacionServicio } from '../../services/autenticacion.service';

@Component({
  selector: 'page-home',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController, private _autenticacionServicio: AutenticacionServicio) {

  }

  logout() {
    this._autenticacionServicio.cerrarSesion();
    this.navCtrl.setRoot(IniciarSesionPage);
  }

}
