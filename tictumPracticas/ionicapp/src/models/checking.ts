/**
 * Created by Grupo Practicas on 17/05/2017.
 */
export class Checking {
	geoposition: {
		lat: number,
		ing: number
	};
	date: Date;

  	constructor(values : Object = {}){
		Object.assign(this,values);
	}
	
}
