import {FormControl} from '@angular/forms';

export class DniValidator {

  static hasValidFormat(dniFormControl: FormControl): any {
    const dniRegex = /^[0-9]{8}[a-z, A-Z]$/;
    return dniRegex.test(dniFormControl.value) ?
      null :
      {
        "dni.hasValidFormat": {
          valid: false
        }
      }
  }

  static isValid(dniFormControl: FormControl) {
    let value = dniFormControl.value;
    let validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    if (value) {
      if (value.length == 9) {
        let dniNumber: number = parseInt(value.substring(0, 8));
        let validLetter: string = validLetters.charAt(dniNumber % 23);
        let currentLetter = value.substring(8, value.length).toUpperCase();
        return currentLetter === validLetter ?
          null: {
          "dni.isValid":{
            valid : false
          }
        };
      }
    }
    return false;
  }


}
