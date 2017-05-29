export class Checking {

  constructor() {

  }

  getChecksByDate(users, date){
    let checksDisplay = [];
    for (let user of users) {
      for (let check of user.checking) {
        if (this.getFormatDate(date) == check.date) {
          let checkUser = {
            name: user.name,
            checking: check
          };
          checksDisplay.push(checkUser);
        }
      }
    }
    return checksDisplay;
  }

  getFormatDate(date) {
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
