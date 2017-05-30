export class Checking {

  userPressed;
  constructor() {

  }

  getChecksByDate(users, date){
    let checksDisplay = [];
    let checkDate = this.getFormatDate(date);
    for (let user of users) {
      for (let check of user.checking) {
        if (checkDate == check.date) {
          let checkUser = {
            name: user.name,
            lastname: user.lastname,
            checking: check
          };
          checksDisplay.push(checkUser);
        }
      }
    }
    return checksDisplay;
  }

  onClickCheckUser(data){
    this.userPressed = data;
  }

  /*getFormatDate(format?){
    let date :any;
    if(typeof this.date === "object"){
      date = this.date;
      let ret = date.month + "/" + date.day + "/" + date.year;
      console.log(ret);
      return ret;
    } 
    else{
      date = (format)? new Date(Date.parse(this.date)) : new Date();
      console.log(date);
      let day = date.getUTCDate().toString();
      let month = (date.getUTCMonth() + 1).toString();
      let year = date.getUTCFullYear();
      day = (day.length > 1) ? day:"0"+day ;
      month = (month.length > 1) ? month : "0"+month;
      let ret =  (format)? month + "/" + day + "/" + year : year+"-"+month+"-"+day;
      console.log(ret);
      return ret;
    }*/

  getFormatDate(date) {
    console.log(date);
    let day, month, year;
    if (date['day']) {
      day = date['day'];
      month = date['month'];
      year = date['year'];
    } else {
      let today = new Date();
      day = today.getUTCDate();
      month = today.getUTCMonth() + 1;
      year = today.getUTCFullYear();
    }
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return month + "/" + day + "/" + year;
  }

}
