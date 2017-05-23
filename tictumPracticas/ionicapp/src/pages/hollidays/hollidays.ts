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
  currentSelectedDate : any ='';
  personalDay : any = '';
  holliday ={
    startDate: '',
    endDate:'',
    days:0 ,
    state:''
  }
  buttonPersonalDaysDisabled:boolean=false;
  bookPersonalDaysDisabled : boolean = true;
  startDateDisabled: boolean = false;
  endDateDisabled: boolean = false;
  bookHollidaysDisabled: boolean = true;
  user : User = new User();
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
      this.loadHollidays();
    }    

    loadEvents() {
       // this.eventSource = this.StartHollidays();
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
        console.log(this.holliday.startDate);
        this.buttonPersonalDaysDisabled = true;
      } 
    
    }

    EndHollidays(){
      if(this.currentSelectedDate !='' && this.holliday.startDate!=''&& this.holliday.startDate < this.currentSelectedDate ){
        this.holliday.endDate = this.currentSelectedDate;   
        this.bookHollidaysDisabled = false;
        let  s = new Date(this.holliday.startDate);
        let  f = new Date(this.holliday.endDate);
        this.holliday.days = (f.getTime()-s.getTime())/(24*60*60*1000);
      } 
      else  console.log("fecha no valida")
    }


    bookHollidays(){
    /*1 contar los dias entre f.inicio y f.final   (listo)
      2 poner por defecto estado pendiente(reserva) (listo)
      3  enviar holliday{starDate , endDate , state , days  } (listo)
      4 comprobar que no tenga ya las vacaciones pilladas en esas fechas
      5 Quitar los fines de semana
    */
      this.holliday.state= "pending";      
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
       for (var i = 0; i < this.user.hollidays.length; i ++) {
               let  startTime = new Date(this.user.hollidays[i].startDate);
               let endTime = new Date(this.user.hollidays[i].endDate);
                events.push({
                    title: 'vacaciones',
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                    color: 'danger'
                
                }); 
           // console.log(events);
        }
        return events;
    }

    checkDateInHollidays(date){
      console.log(date);
      for(let i in this.user.hollidays){
        let holliday = this.user.hollidays[i];
        let startTime = new Date(holliday.startDate);
        let endTime = new Date(holliday.endDate);
        if((startTime < date  && date < endTime) || (date < this.calendar.currentDate)) return true;
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
  
/*
  if(this.startDate == ''){
          this.startDate = ev.selectedTime;
     nsole.log(this.startDate);
            
        }else{
             if(this.endDate == ''){
          this.endDate = ev.selectedTime;
          console.log(this.endDate);
            
        }else{
            if(this.personalDay == ''){
          this.personalDay = ev.selectedTime;
          console.log(this.personalDay);
            
        } co
        }*/     