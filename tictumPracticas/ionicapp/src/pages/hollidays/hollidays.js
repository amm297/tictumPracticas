var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Users } from "../../providers/users";
import { User } from "../../models/user";
/**
 * Generated class for the hollidaysPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HollidaysPage = (function () {
    function HollidaysPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.currentSelectedDate = '';
        this.personalDay = '';
        this.holliday = {
            startDate: '',
            endDate: '',
            days: 0,
            state: ''
        };
        this.buttonPersonalDaysDisabled = false;
        this.bookPersonalDaysDisabled = true;
        this.startDateDisabled = false;
        this.endDateDisabled = false;
        this.bookHollidaysDisabled = true;
        this.user = new User();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        }; //
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.user = this.navParams.get("user");
    }
    HollidaysPage.prototype.ionViewDidLoad = function () {
        this.loadHollidays();
    };
    HollidaysPage.prototype.loadEvents = function () {
        this.eventSource = this.StartHollidays();
    };
    HollidaysPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HollidaysPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    HollidaysPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    HollidaysPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    HollidaysPage.prototype.onTimeSelected = function (ev) {
        this.currentSelectedDate = ev.selectedTime;
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    HollidaysPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    HollidaysPage.prototype.StartHollidays = function () {
        if (this.currentSelectedDate != '') {
            this.holliday.startDate = this.currentSelectedDate;
            console.log(this.holliday.startDate);
            this.buttonPersonalDaysDisabled = true;
        }
    };
    HollidaysPage.prototype.EndHollidays = function () {
        if (this.currentSelectedDate != '' && this.holliday.startDate != '' && this.holliday.startDate < this.currentSelectedDate) {
            this.holliday.endDate = this.currentSelectedDate;
            this.bookHollidaysDisabled = false;
            var s = new Date(this.holliday.startDate);
            var f = new Date(this.holliday.endDate);
            this.holliday.days = (f.getTime() - s.getTime()) / (24 * 60 * 60 * 1000);
        }
        else
            console.log("fecha no valida");
    };
    HollidaysPage.prototype.bookHollidays = function () {
        var _this = this;
        /*1 contar los dias entre f.inicio y f.final
          2 poner por defecto estado pendiente(reserva)
          3  enviar holliday{starDate , endDate , state , days  }
          4 comprobar que no tenga ya las vacaciones pilladas en esas fechas
          5 Quitar los fines de semana
        */
        this.holliday.state = "pending";
        this.user.addHolliday(this.holliday);
        this.userService.addHollidays(this.user)
            .then(function (data) {
            console.log(data);
            _this.navCtrl.pop();
        });
    };
    HollidaysPage.prototype.PersonalDays = function () {
        //comprobar que la fecha no sea sabado o domingo
        if (this.currentSelectedDate != '') {
            var d = new Date(this.currentSelectedDate);
            if (d.getDay() == 6 || d.getDay() == 0)
                console.log("Error fin de semana");
            this.personalDay = this.currentSelectedDate;
            this.startDateDisabled = true;
            this.endDateDisabled = true;
            this.bookPersonalDaysDisabled = false;
        }
    };
    HollidaysPage.prototype.bookPersonalDays = function () {
        var _this = this;
        this.user.addPersonalDays(this.personalDay);
        this.userService.addPersonalDays(this.user)
            .then(function (data) {
            console.log(data);
            _this.navCtrl.pop();
        });
    };
    HollidaysPage.prototype.loadHollidays = function () {
        var events = [];
        /* for (var i = 0; i < this.user.hollidays.lenght; i += 1) {
                 startTime = new Date(this.user.hollidays[i].statDate);
                 endTime = new Date(this.user.hollidays[i].endDate));
                 events.push({
                     title: 'vacaciones',
                     startTime: startTime,
                     endTime: endTime,
                     allDay: false,
                 
                 });
             
         }
         return events;*/
    };
    HollidaysPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    return HollidaysPage;
}());
HollidaysPage = __decorate([
    Component({
        selector: 'page-hollidays',
        templateUrl: 'hollidays.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Users])
], HollidaysPage);
export { HollidaysPage };
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
//# sourceMappingURL=hollidays.js.map