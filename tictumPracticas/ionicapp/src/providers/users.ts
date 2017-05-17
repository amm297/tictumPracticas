import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Users {

  constructor(public http: Http) {
  }

  server = 'http://172.16.112.40:8080';

  registerUser(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/tableusers-old/register', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  loginUser(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/tableusers-old/login', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
