import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from "../user/user";
import {Users} from "../../providers/users";
import {User} from "../../models/user";
import { AlertController } from 'ionic-angular';

<<<<<<< HEAD
=======
/**
 * Generated class for the hollidaysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


>>>>>>> master
@Component({
  selector: 'page-hollidays',
  templateUrl: 'hollidays.html',
})
<<<<<<< HEAD
export class HollidaysPage {
  currentSelectedDate : any ='';
  personalDay : any = '';
=======
export class hollidaysPage {

  currentSelectedDate : any =''; //fecha seleccionada
  personalDay : any = '';

  //esquema de la vacacion
>>>>>>> master
  holliday ={
    startDate: '',
    endDate:'',
    days:0 ,
    status:''
  }
<<<<<<< HEAD
=======

  //comprobacion de dias
  total: number = 0;
  totalP : number = 0;
  
  //usuario que va a solicitar 
  user : User = new User();

  //Habilitacion de botones
>>>>>>> master
  buttonPersonalDaysDisabled:boolean=false;
  bookPersonalDaysDisabled : boolean = true;
  startDateDisabled: boolean = false;
  endDateDisabled: boolean = false;
  bookHollidaysDisabled: boolean = true;
<<<<<<< HEAD
  user : User = new User();
=======

  //Variables para el calendario
>>>>>>> master
  eventSource;
  startTime;
  endTime;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
   }; //

  constructor(public navCtrl: NavController, public navParams: NavParams , private userService:Users,public alertCtrl: AlertController) {
    this.user = this.navParams.get("user");
    //console.log(this.user.hollidays);
  }

    ionViewDidLoad() {
      console.log(this.user);
      this.eventSource = this.loadHollidays();
    }    

     onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

<<<<<<< HEAD
    onTimeSelected(ev) {
        this.currentSelectedDate=ev.selectedTime;
        if(this.checkDateInHollidays(this.currentSelectedDate)){
          this.buttonPersonalDaysDisabled=true;
          this.startDateDisabled = true;
          this.endDateDisabled = true;
        }else{
          this.buttonPersonalDaysDisabled=false;
          this.startDateDisabled = false;
          this.endDateDisabled = false;
        }
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
=======
    //Seleccion de una fecha
    onTimeSelected(ev) {
        this.currentSelectedDate=ev.selectedTime;
        let check = this.checkDateInHollidays(this.currentSelectedDate);
        this.buttonPersonalDaysDisabled=check;
        this.startDateDisabled = check;
        this.endDateDisabled = check;
>>>>>>> master
    }

    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
<<<<<<< HEAD
    StartHollidays(){
      if(this.currentSelectedDate !=''){
        this.holliday.startDate = this.currentSelectedDate; 
        console.log(this.holliday.startDate);
        this.buttonPersonalDaysDisabled = true;
      }
    }
    EndHollidays(){
      if(this.currentSelectedDate !='' && this.holliday.startDate!=''&& this.holliday.startDate < this.currentSelectedDate ){
=======

    StartHollidays(){
      if(this.currentSelectedDate !=''){
        this.holliday.startDate = this.currentSelectedDate; 
        this.buttonPersonalDaysDisabled = true;
        for(let i in this.user.hollidays){
          this.total += this.user.hollidays[i].days;
        }
        console.log(this.total);
      }
    }

    EndHollidays(){
      if(this.currentSelectedDate !='' && 
         this.holliday.startDate!=''   && 
         this.holliday.startDate < this.currentSelectedDate ){

>>>>>>> master
        this.holliday.endDate = this.currentSelectedDate;   
        this.bookHollidaysDisabled = false;
        let  s = new Date(this.holliday.startDate);
        let  f = new Date(this.holliday.endDate);
<<<<<<< HEAD
        this.holliday.days = (f.getTime()-s.getTime())/(24*60*60*1000);
=======
        this.holliday.days = Math.floor((f.getTime()-s.getTime())/(24*60*60*1000));
        this.holliday.days -= 2*Math.floor(this.holliday.days/7);
        if( this.holliday.days+this.total > this.user.daysh ){
             this.bookHollidaysDisabled = true;
             let alert = this.alertCtrl.create({
                 title: 'Vacaciones sobrepasadas',
                 subTitle: 'Vas a coger mas dias de los permitidos',
                 buttons: ['Ok']
             });
            alert.present();
        } 
>>>>>>> master
      } 
      else  console.log("fecha no valida")
    }


<<<<<<< HEAD
    bookHollidays(){
    /*1 contar los dias entre f.inicio y f.final   (listo)
      2 poner por defecto estado pendiente(reserva) (listo)
      3  enviar holliday{starDate , endDate , status , days  } (listo)
      4 comprobar que no tenga ya las vacaciones pilladas en esas fechas
      5 Quitar los fines de semana
    */
     
=======
    bookHollidays(){     
>>>>>>> master
      this.holliday.status= "pending";      
      this.user.addHolliday(this.holliday);
      this.userService.addHollidays(this.user)
      .then(data => {
        console.log(data);
        this.navCtrl.pop();
<<<<<<< HEAD
      });}
     
    
      
=======
      });
    }
     
>>>>>>> master

    PersonalDays(){
      //comprobar que la fecha no sea sabado o domingo
      if(this.currentSelectedDate !=''){
        let d = new Date(this.currentSelectedDate);
        if(d.getDay() == 6 || d.getDay() == 0) console.log("Error fin de semana");
        this.personalDay = this.currentSelectedDate;
        this.startDateDisabled= true;
        this.endDateDisabled= true;
        this.bookPersonalDaysDisabled = false;
      }
    }

    bookPersonalDays(){
      this.user.addPersonalDays(this.personalDay);
      this.userService.addPersonalDays(this.user)
      .then(data => {
        console.log(data);
        this.navCtrl.pop();
      });
    }


    loadHollidays() {    
        var events = [];
<<<<<<< HEAD
       for (var i = 0; i < this.user.hollidays.length; i ++) {
               let  startTime = new Date(this.user.hollidays[i].startDate);
               let endTime = new Date(this.user.hollidays[i].endDate);
                events.push({
                    title: 'vacaciones',
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                    extra: 'Hola que tal',
                    color: this.user.hollidays[i].status                
                }); 
           // console.log(events);
=======
        for(let i in this.user.hollidays){
            let holliday = this.user.hollidays[i];
            events.push({
               title: 'vacaciones',
               startTime: new Date(holliday.startDate),
               endTime: new Date(holliday.endDate),
               allDay: false,
               color: holliday.status
            });
>>>>>>> master
        }
        return events;
    }

    checkDateInHollidays(date){
<<<<<<< HEAD
      console.log(date);
=======
>>>>>>> master
      for(let i in this.user.hollidays){
        let holliday = this.user.hollidays[i];
        let startTime = new Date(holliday.startDate);
        let endTime = new Date(holliday.endDate);
<<<<<<< HEAD
        if((startTime < date  && date < endTime) || (date < this.calendar.currentDate)) return true;
=======
        if((startTime <= date  && date < endTime) || (date < this.calendar.currentDate)) return true;
>>>>>>> master
      }
      return false;
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
<<<<<<< HEAD


=======
>>>>>>> master
    };

}
 