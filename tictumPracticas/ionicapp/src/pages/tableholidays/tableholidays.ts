import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Users} from "../../providers/users";

@IonicPage()
@Component({
  selector: 'page-tableholidays',
  templateUrl: 'tableholidays.html'
})
export class TableholidaysPage implements OnInit{

  users: any;
  search: any;
  shownGroup;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private usersService: Users) {}

  ngOnInit() {
    this.usersService.getAllUsers().then((data) => {
      this.users = data;
      this.search = this.users;
      console.log(this.users);
    });
  }

  //Search users
  onInput(event) {
    let input = event.target.value;
    if (input && input.trim() != '') {
      this.search = this.users.filter(user => {
        return (
        user.name.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
        user.lastname.toLowerCase().indexOf(input.toLowerCase()) != -1 ||
        user.role.toLowerCase().indexOf(input.toLowerCase()) > -1 )
      });
    } else {
      this.search = this.users;
    }
  }

  //Display users
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  };

  //Buttons

  modifyHollidays(user,index,status){
    user.hollidays[index].status = status;
    this.usersService.modifyHollidays(user._id,user.hollidays[index],index).then(data =>{
      console.log(data);
    })
  }/*
  aprovedHollidays(user,index){
      user.hollidays[index].status = 'aproved';   
      this.usersService.changeHollidays(user._id,user.hollidays).then(()=>{
        console.log("actualizado");
      });           
      //console.log(user.hollidays[0].status);
  }

  rejectHollidays(user,index){
       user.hollidays[index].status = 'denied';   
      this.usersService.changeHollidays(user._id,user.ho).then(()=>{
        console.log("actualizado");
      });               
  }*/
}