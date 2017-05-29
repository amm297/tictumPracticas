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

  getFormatDate(date) {
    console.log(date);
    let objDate = (typeof date === "object")? date : new Date();
    let day = (objDate['day']) ? objDate['day'] : objDate.getUTCDate();
    let month = (objDate['month']) ? objDate['month'] : objDate.getUTCMonth() + 1;
    let year = (objDate['year']) ? objDate['year'] : objDate.getUTCFullYear();

    month = (month<10)? "0"+month : month;
    day = (day<10)? "0"+day : day;
    return  month + "/" + day + "/" + year;
  }

}
