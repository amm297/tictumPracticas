import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../models/user";

@Injectable()
export class Users {

  constructor(public http: Http) {
  }

  server = 'http://172.16.112.40:8080';

  registerUser(data) {
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.server + '/api/users/create', JSON.stringify(data), {headers: headers})
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
      this.http.post(this.server + '/api/users/login', JSON.stringify(data), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

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
}




const hasValidFormat = (value: string): boolean => {
  const dniRegex = /^[0-9]{8}[a-z, A-Z]$/;

  return dniRegex.test(value);
}

const isValidDNI = (value: string): boolean => {
  let dniNumber: number = parseInt(value);
  let validLetter: string = getValidLetterByDNINumber(dniNumber);
  let currentLetter = value.charAt(8).toUpperCase();

  return currentLetter === validLetter;
};

let getValidLetterByDNINumber = (dniNumber: number) : string => {
  let letterIndex = dniNumber % 23;
  let validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';

  return validLetters.charAt(letterIndex)
};