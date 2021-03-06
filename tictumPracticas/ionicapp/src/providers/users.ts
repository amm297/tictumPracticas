import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Md5} from 'ts-md5/dist/md5';
import {LoadingController} from 'ionic-angular';

@Injectable()
export class Users {

  // Límite de registros por página
  perpage: number = 2;


  constructor(public http: Http, private loadingCtrl: LoadingController) {
  }

  //WI-Fi
  //server = 'http://192.168.4.64:8080';
  //server = 'http://192.168.5.26:8080';
  //server = 'http://172.16.112.45:8080';
  server = 'http://localhost:8080';

  registerUser(data) {
    data.password = Md5.hashStr(data.password);
    return this.postPromise({route:this.server + '/api/users/create',data:data});

   /* return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/users/create', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });*/
  }

  loginUser(data) {

    return this.postPromise({route:this.server + '/api/users/login',data:{input: data.input,password: Md5.hashStr(data.password)}});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/users/login', JSON.stringify({
        input: data.input,
        password: Md5.hashStr(data.password)
      }), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  /*Descactivar usuario */

  changeRole(userId, role) {
    return this.putPromise({route:this.server + '/api/users/changerole/' + userId,data:{role: role}});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/changerole/' + userId, {role: role}, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        })
    })*/
  }

  logoutUser(data) {
    localStorage.clear();
  }

  /*-- Roberto --*/

  /*Función para generar contraseña AUTOMÁTICA*/
  newPasswdAuto(data) {
    return this.putPromise({route:this.server + '/api/users/autopassw',data:data});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/autopassw', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  /*Funcion para cambiar la contraseña, comprobamos que el email/dni existe en la base de datos y después le añadimos la nueva contraseña.*/
  newPassword(data) {
    data.password = Md5.hashStr(data.password);
    data.oldpassword =(data.oldpassword)?  Md5.hashStr(data.oldpassword) : null;

    return this.putPromise({route:this.server + '/api/users/resetpassw',data:data});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/resetpassw', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  getAllUsers() {
    return this.getPromise({route: this.server + '/api/users/read'});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/users/read', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  deleteUser(deleteUserId: String) {
    return this.deletePromise({info:this.server + '/api/users/delete?_id=' + deleteUserId })
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(this.server + '/api/users/delete?_id=' + deleteUserId, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  modifyUser(data) {
    data.password = Md5.hashStr(data.password);
      return this.putPromise({route:this.server + '/api/users/update',data:data});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/update', data, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  //Gestion de vacaciones
  addHollidays(data) {
    console.log(data);
    return this.putPromise({route:this.server + '/api/users/update',data:data});

    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(return this.putPromise({route:this.server + '/api/users/update',data:data});, JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  addPersonalDays(data) {
    console.log(data);
    return this.putPromise({route:this.server + '/api/users/addPersonalDays',data:data});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/addPersonalDays', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }
  updateHollidays(data){
    return this.putPromise({route:this.server + '/api/users/updateHollidays',data:data});

    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/updateHollidays', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  //Fichar
  Check(userId,data) {

    console.log(userId);
    console.log(data);
    return this.putPromise({route:this.server + '/api/users/check?_id=' + userId,data:data});
   /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/users/check?_id=' + userId, JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log("service")
          console.log(data);
          resolve(data);
        });
    });*/
  }

  /* Metodo de prueba para la paginación del listado de usuarios */
  load(page: number = 0) {
    //return this.getPromise({route: this.server + '/api/users/readPage?page=' + page});
    return this.getPromise({route: this.server + '/api/users/readPage?page='+page});
    /*return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/users/readPage?page=' + page)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });*/
  }

  createLoading(msg) {
    return this.loadingCtrl.create({
      content: msg
    });
  }

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
