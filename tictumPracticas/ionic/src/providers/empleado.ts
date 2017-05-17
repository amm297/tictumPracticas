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
 data: any;

  constructor(public http: Http) {
    console.log('Hello Empleado Provider');
    this.data = null;
  }

  crearempleado(empleado){
    this.http.post('http://localhost:8080/api/empleado', empleado)
      .subscribe(res => {
        console.log(res.json());
     });
  }

  verempleados(){{
 
    if (this.data) {
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/empleado')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
 }
  }

}
