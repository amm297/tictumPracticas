import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Md5} from 'ts-md5/dist/md5';
import {LoadingController} from 'ionic-angular';
/*
  Generated class for the GenericProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GenericProvider {

	//WI-Fi
  //server = 'http://192.168.4.64:8080';
  //server = 'http://192.168.5.26:8080';
  server = 'http://172.16.112.45:8080';
  //server = 'http://localhost:8080';

  constructor(public http: Http,private loadingCtrl: LoadingController) {
  }

  /* USER */
  registerUser(data) {
    data.password = Md5.hashStr(data.password);
    return this.postPromise({route:this.server + '/api/users/create',data:data});
  }

  loginUser(data) {
    return this.postPromise({route:this.server + '/api/users/login',data:{input: data.input,password: Md5.hashStr(data.password)}});
  }

  /*Descactivar usuario */
  changeRole(userId, role) {
    return this.putPromise({route:this.server + '/api/users/changerole/' + userId,data:{role: role}});
  }

  logoutUser(data) {
    localStorage.clear();
  }

  /*Función para generar contraseña AUTOMÁTICA*/
  newPasswdAuto(data) {
    return this.putPromise({route:this.server + '/api/users/autopassw',data:data});
  }

  /*Funcion para cambiar la contraseña, comprobamos que el email/dni existe en la base de datos y después le añadimos la nueva contraseña.*/
  newPassword(data) {
    data.password = Md5.hashStr(data.password);
    data.oldpassword =(data.oldpassword)?  Md5.hashStr(data.oldpassword) : null;
    return this.putPromise({route:this.server + '/api/users/resetpassw',data:data});
  }

  getAllUsers() {
    return this.getPromise({route: this.server + '/api/users/read'});
  }

  getUserById(userId){
    return this.getPromise({route:this.server + '/api/users/readbyId/'+userId});
  }

  deleteUser(deleteUserId: String) {
    return this.deletePromise({info:this.server + '/api/users/delete?_id=' + deleteUserId })
  }

  modifyUser(data) {
    data.password = Md5.hashStr(data.password);
      return this.putPromise({route:this.server + '/api/users/update',data:data});
  }

  //Gestion de vacaciones
  addHollidays(data) {
    console.log(data);
    return this.putPromise({route:this.server + '/api/users/addhollidays',data:data});
  }

  addPersonalDays(data) {
    console.log(data);
    return this.putPromise({route:this.server + '/api/users/addPersonalDays',data:data});
  }
  updateHollidays(data){
    return this.putPromise({route:this.server + '/api/users/updateHollidays',data:data});
  }

  //Fichar
  Check(userId,data) {
    return this.putPromise({route:this.server + '/api/users/check?_id=' + userId,data:data});
  }

  /* Metodo de prueba para la paginación del listado de usuarios */
  load(page: number = 0) {
    return this.getPromise({route: this.server + '/api/users/readPage?page='+page});
  }

  createLoading(msg) {
    return this.loadingCtrl.create({
      content: msg
    });
  }

  /*ROLES*/
  getAllRoles() {
  	return this.getPromise({route: this.server + '/api/roles/read'});
  }

  removeRole(id) {
  	return this.deletePromise({route:this.server + '/api/roles/delete?_id=' + id});
  }

  addRole(role) {
  	return this.postPromise({route: this.server + '/api/roles/create',data:role })
  }

  updateRole(role) {
  	return this.putPromise({route: this.server + '/api/roles/update', data:role});
  }


  /*PROMISES*/

  getPromise(info){
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(info.route, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  postPromise(info){
     return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(info.route, JSON.stringify(info.data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }

  putPromise(info){
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(info.route, JSON.stringify(info.data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log("service")
          console.log(data);
          resolve(data);
        });
    });
  }

  deletePromise(info){
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(info.route, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
