/**
 * Created by Grupo Practicas on 17/05/2017.
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

  	constructor(values : Object = {}){
		Object.assign(this,values);
	}

	isAdmin(){
		return (this.role == 'admin') ? true : false;
	}

	isUser(){
		return (this.role == 'user') ? true : false;
	}





}
