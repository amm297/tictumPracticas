import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Roles {
  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  server = 'http://192.168.5.26:8080';


  getAllRoles() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.server + '/api/roles/read').map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
