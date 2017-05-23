/**
 * Created by Javier on 17/05/2017.
 */
export class User {
	dni: string;
	name: string;
	lastname: string;
	address: string;
	country: string;
	phone: string;
	email: string;
	password: string;
	role: string;
	hollidays: any[];
	personalDays: any[];
	daysp:number;
	daysh:number;

  	constructor(values : Object = {}){
		Object.assign(this,values);
	}

	isAdmin(){
		return (this.role == 'admin') ? true : false;
	}

	isUser(){
		return (this.role == 'user') ? true : false;
	}
	addHolliday(data){

   	this.hollidays.push(data);
   }

   addPersonalDays(data){
     
      this.personalDays.push(data)
   }





}
