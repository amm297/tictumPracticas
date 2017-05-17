import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Empleado provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Empleado {

  constructor(public http: Http) {
    console.log('Hello Empleado Provider');
  }

  crearempleado(empleado){
    this.http.post('http://localhost:8080/api/users/create', empleado)
      .subscribe(res => {
        console.log(res.json());
     });
  }

  verUsers(empleado){
    this.http.get('http://localhost:8080/api/users/read', empleado)
      .subscribe(res => {
        console.log(res.json());
     });
  }

    editUser(empleado){
    this.http.put('http://localhost:8080/api/users/update', empleado)
      .subscribe(res => {
        console.log(res.json());
     });
  }

    deleteUser(empleado){
    this.http.delete('http://localhost:8080/api/users/delete', empleado)
      .subscribe(res => {
        console.log(res.json());
     });
  }


}
