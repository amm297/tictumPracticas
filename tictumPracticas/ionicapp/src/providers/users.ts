import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../models/user";
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class Users {

  constructor(public http: Http) {
  }

  server = 'http://192.168.5.26:8080';

  //server = 'http://172.16.112.40:8080';
  //server = 'http://192.168.5.35:8080';
  //server = 'http://172.16.112.163:8080';
  //server = 'http://localhost:8080';



  registerUser(data) {
    console.log(data.dni);
    data.password = Md5.hashStr(data.password);
    console.log(data.password);
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
    data.password = Md5.hashStr(data.password);
    console.log(data.password);
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
  /*-- Roberto --*/

  addHollidays(data){
    console.log(data);
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/addhollidays', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  addPersonalDays(data){
    console.log(data);
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/addPersonalDays', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
    /*-- Roberto --*/

 /*-- Esperanza --*/

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
    data.password = Md5.hashStr(data.password);
    console.log(data.password);
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

 //Esperanza


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
      this.http.delete(this.server + '/api/users/delete?_id='+deleteUserId, {headers: headers}) 
        .map(res => res.json()) 
        .subscribe(data => { 
          resolve(data); 
        }); 
    }); 
  } 
 
  modifyUser(data) {     
    data.password = Md5.hashStr(data.password);
    console.log(data.password);
    return new Promise(resolve => { 
      let headers = new Headers(); 
      headers.append('Content-Type', 'application/json'); 
      this.http.put(this.server + '/api/users/update', JSON.stringify(data), {headers: headers}) 
        .map(res => res.json()) 
        .subscribe(data => { 
          resolve(data); 
        }); 
    }); 
  } 

}

