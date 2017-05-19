import {FormControl} from '@angular/forms';
import { hasValidFormat, isValidDNI } from './dniValidation';

export class DniValidator {

  static hasValidFormat(dniFormControl: FormControl): any {
    return hasValidFormat(dniFormControl.value) ?
      null :
      {
        "dni.hasValidFormat": {
          valid: false
        }
      }
  }

  static isValid(dniFormControl: FormControl) {
    return isValidDNI(dniFormControl.value) ?
      null :
      {
        "dni.isValid": {
          valid: false
        }
      }
  }
}