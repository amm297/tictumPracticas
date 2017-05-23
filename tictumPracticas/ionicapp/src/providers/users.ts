import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../models/user";

@Injectable()
export class Users {

  // Límite de registros por página
  perpage:number = 2;

  constructor(public http: Http) {
  }

  //WI-Fi
  //server = 'http://192.168.4.45:8080';
  //server = 'http://192.168.5.26:8080';
  //Portatil Celada
  server = 'http://172.16.112.163:8080';
  //server = 'http://localhost:8080';

  registerUser(data) {
    console.log(data.dni);
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/users/create', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }

  loginUser(data) {
    console.log(this.server);
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/users/login', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  logoutUser(data) {
    localStorage.clear();
  }

  /*Función para generar contraseña AUTOMÁTICA*/
	newPasswdAuto(data){
	    return new Promise(resolve => {
	      let headers = new Headers();
	      headers.append('Content-Type', 'application/json');
	      this.http.put(this.server + '/api/users/autopassw', JSON.stringify(data), {headers: headers})
	        .map(res => res.json())
	        .subscribe(data => {
	          resolve(data);
	        });
	    });
	}
 /*Funcion para cambiar la contraseña, comprobamos que el email/dni existe en la base de datos y después le añadimos la nueva contraseña.*/
  newPassword(data){
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/resetpassw', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getAllUsers() {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/users/read', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  deleteUser(deleteUserId: String) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(this.server + '/api/users/delete?_id=' + deleteUserId, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  modifyUser(user) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/update', user, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  /* Metodo de prueba para la paginación del listado de usuarios */
  load(start:number=0) {
    return new Promise(resolve => {
      this.http.get(this.server + '/api/users/read?limit='+this.perpage+'&skip='+start)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}

