var PasswordValidator = (function () {
    function PasswordValidator() {
    }
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
    PasswordValidator.isEqual = function (control) {
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
    };
    return PasswordValidator;
}());
export { PasswordValidator };
//# sourceMappingURL=passwordValidator.js.map