import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Coor {


  constructor(public http: Http) {
  }

  //server = 'http://192.168.5.26:8080';

  //server = 'http://172.16.112.40:8080';
  //server = 'http://192.168.5.35:8080';
  //server = 'http://172.16.112.163:8080';
  //server = 'http://localhost:8080';
  server = 'http://192.168.5.28:8080';


  saveCoor(data){
  	return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/coor/save', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  }
