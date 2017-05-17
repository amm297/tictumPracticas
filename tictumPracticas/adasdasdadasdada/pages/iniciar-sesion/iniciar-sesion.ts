import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { AutenticacionServicio} from '../../services/autenticacion.service';

@Component({
	selector: 'page-login',
  templateUrl: 'iniciar-sesion.html'

})
export class IniciarSesionPage {

	dni:string = '';
	password:string = '';

	constructor(public navCtrl: NavController, public _autenticacionServicio:AutenticacionServicio, public alertCtrl: AlertController, public loadingCtrl:LoadingController) {}

	ionViewDidLoad() {
		console.log('Pagina de logueo cargada');
	}

	onIniciarSesion() {

			if(this.dni === '' || this.password === '') {
				let alert = this.alertCtrl.create({
					title:'Error',
					subTitle:'Todos los campos son necesarios',
					buttons:['OK']
				});
				alert.present();
				return;
			}

			let loader = this.loadingCtrl.create({
				content: "Inciando sesión..."
			});
			loader.present();



			this._autenticacionServicio.iniciarSesion(this.dni, this.password)
			.then((res) => {
				if (res){
					console.log('Sesion iniciada');
					loader.dismissAll();
					this.navCtrl.setRoot(InicioPage);
				} else{
					loader.dismissAll();
					console.log(res);

					let alert = this.alertCtrl.create({
						title:'Error al inciar sesion',
						subTitle:'blablablaaaaaa',
						buttons:['OK']
					});
					alert.present();
				}});

	}

}
