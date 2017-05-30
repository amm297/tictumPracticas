/**
 * Created by Javier on 30/04/2017.
 */
import {FormControl} from '@angular/forms';

export class PasswordValidator {

  /**static isValid(control: FormControl): any {
    if (control.value.length < 8) {
      return {
        "password must have at least 8 characters": true
      };
    }
    if (control.value == '') {
      return {
        "empty": true
      };
    }
    return null;
  }**/

  static isEqual(control: FormControl):any{
    if (control.value !== control.root.value['password']) {
      return {
        "different passwords": true 

      }; 

    }
    if (control.value == '') {
      return {
        "empty": true
      };
    }
    return null;
  }
}
