import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserPage} from "../user/user";
import {Users} from "../../providers/users";
import {User} from "../../models/user";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the hollidaysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-hollidays',
  templateUrl: 'hollidays.html',
})
export class hollidaysPage {

  currentSelectedDate : any =''; //fecha seleccionada
  personalDay : any = '';

  //esquema de la vacacion
  holliday ={
    startDate: '',
    endDate:'',
    days:0 ,
    status:''
  }

  //comprobacion de dias
  total: number = 0;
  totalP : number = 0;
  
  //usuario que va a solicitar 
  user : User = new User();

  //Habilitacion de botones
  buttonPersonalDaysDisabled:boolean=false;
  bookPersonalDaysDisabled : boolean = true;
  startDateDisabled: boolean = false;
  endDateDisabled: boolean = false;
  bookHollidaysDisabled: boolean = true;

  //Variables para el calendario
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
      this.eventSource = this.loadHollidays();
    }    

    showHollidays(){
      this.eventSource = this.loadHollidays();
    }
    showPesonalDays(){
      this.eventSource = this.loadPersonalDays();
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

    //Seleccion de una fecha
    onTimeSelected(ev) {
        this.currentSelectedDate=ev.selectedTime;
        let check = this.checkDateInHollidays(this.currentSelectedDate);
        check = (!check) ? this.checkDatePersonalDay(this.currentSelectedDate) : check;
        this.buttonPersonalDaysDisabled=check;
        this.startDateDisabled = check;
        this.endDateDisabled = check;
    }

    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

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

        this.holliday.endDate = this.currentSelectedDate;   
        this.bookHollidaysDisabled = false;
        let  s = new Date(this.holliday.startDate);
        let  f = new Date(this.holliday.endDate);
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
      } 
      else  console.log("fecha no valida")
    }


    bookHollidays(){     
      this.holliday.status= "pending";      
      this.user.addHolliday(this.holliday);
      this.userService.addHollidays(this.user)
      .then(data => {
        console.log(data);
        this.navCtrl.pop();
      });
    }
     

    PersonalDays(){
      //comprobar que la fecha no sea sabado o domingo
      if(this.currentSelectedDate !=''){
        let d = new Date(this.currentSelectedDate);
        if(d.getDay() == 6 || d.getDay() == 0) console.log("Error fin de semana");
        else{
          this.personalDay = this.currentSelectedDate;
          this.startDateDisabled= true;
          this.endDateDisabled= true;
          this.bookPersonalDaysDisabled = false;

          if(this.user.personalDays.length >= this.user.daysp){
            this.bookPersonalDaysDisabled = true;
            let alert = this.alertCtrl.create({
              title: "Dias sobrepasados",
              subTitle : "Vas a solicitar mas dias de los que tienes permitidos",
              buttons:  ['OK']
            });
            alert.present();
          }
        }
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
        for(let i in this.user.hollidays){
            let holliday = this.user.hollidays[i];
            events.push({
               title: 'vacaciones',
               startTime: new Date(holliday.startDate),
               endTime: new Date(holliday.endDate),
               allDay: false,
               color: holliday.status
            });
        }
        return events;
    }

    loadPersonalDays(){
      var events = [];
      for(let i in this.user.personalDays){
            let personalDay = this.user.personalDays[i];
            events.push({
               title: 'Asuntos propios',
               startTime: new Date(personalDay),
               endTime: new Date(new Date(personalDay).getTime()+(24*60*60*1000)),
               allDay: false,
               color: 'personal'
            });

        }
        console.log(events);
        return events;

    }

    checkDateInHollidays(date){
      for(let i in this.user.hollidays){
        let holliday = this.user.hollidays[i];
        let startTime = new Date(holliday.startDate);
        let endTime = new Date(holliday.endDate);
        if((startTime <= date  && date < endTime) || (date < this.calendar.currentDate)) return true;
      }
      return false;
    }

    checkDatePersonalDay(date){
      for(let i in this.user.personalDays){
        let personalDay = new Date(this.user.personalDays[i]);
        let d = new Date(date);
        if(personalDay.getTime() == d.getTime()) return true;
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
    };

}
 