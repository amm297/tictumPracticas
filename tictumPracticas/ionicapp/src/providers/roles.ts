import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {LoadingController} from 'ionic-angular';

@Injectable()
export class Roles {
  data: any;

  constructor(public http: Http, private loadingCtrl: LoadingController) {
    this.data = null;
  }
//WI-FI
  //server = 'http://192.168.4.64:8080';
  //server = 'http://172.16.112.51:8080';
  server = 'http://localhost:8080';

  getAllRoles() {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.get(this.server + '/api/roles/read', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  removeRole(id) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(this.server + '/api/roles/delete?_id=' + id, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }

  addRole(role) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/roles/create', JSON.stringify(role), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  updateRole(role) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(this.server + '/api/roles/update', JSON.stringify(role), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  createLoading(msg) {
    return this.loadingCtrl.create({
      content: msg
    });
  }
}
