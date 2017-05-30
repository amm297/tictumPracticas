/**
 * Created by Javier on 17/05/2017.
 */
export class User {
	dni: string;
	name: string;
	lastname: string;
	address: string;
	country: string;
   city: string; 
   stateprovince: string; 
	phone: string;
	email: string;
	password: string;
	role: string;
	hollidays: any[];
	personalDays: any[];
	checking: any[];
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
   addCheck(data){
   	//comprobar si ya exitiste el data
      console.log(this.checking);
  
   	if(!this.getTodayCheck(data.date))	this.checking.push(data);
   	else this.modifyCheck(data);
   	console.log(this.checking);
   }

   getTodayCheck(date){
   	for(let i in this.checking){
   		let check = this.checking[i];
   		if(check.date == date) return true;
   	}
   	return false;
   }

   modifyCheck(data){
   	for(let i in this.checking){
   		let check = this.checking[i];
   		if(check.date == data.date) {
   			check.salida = data.salida;
   			console.log("Modificado");
   		}
   	}

   }

	isInactive(){
		return (this.role == 'inactivo') ? true : false;
	}




}
