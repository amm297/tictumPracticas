
// Este servicio sustituye temporalmente a un servicio de autenticacion real
// timeout simula la letencia del servidor al responder


export class AutenticacionServicio {

    sesioniniciada = false;

    usuarioEstaLogueado(){
        return new Promise (
            (resolve, reject) =>{
                setTimeout(()=>{
                    resolve(this.sesioniniciada)
                },1000);
            }
        );
    }

    
    iniciarSesion(dni:string,passw:string){
        return new Promise (
            (resolve, reject) =>{
                setTimeout(()=>{
                    if(dni === '1'){ 
                        this.sesioniniciada = true;
                         resolve(true);
                    } else {
                        this.sesioniniciada = false;
                        resolve(false);
                    }
                   
                },1500);
            }
        );
    }

    cerrarSesion(){
        return new Promise (
            (resolve, reject) =>{
                setTimeout(()=>{
                    this.sesioniniciada = false;
                    resolve(false);

                },1500);
            }
        );
    }
 
   


}