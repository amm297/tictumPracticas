import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Roles {
  data: any;

  constructor(public http: Http) {
    this.data = null;
  }




  //server = 'http://192.168.5.26:8080';
  server = 'http://172.16.112.35:8080';



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

  removeRole(role){
        return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.delete(this.server + '/api/roles/delete?_id=' + role._id, {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }

  addRole(role){
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

  updateRole(role){
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

}
