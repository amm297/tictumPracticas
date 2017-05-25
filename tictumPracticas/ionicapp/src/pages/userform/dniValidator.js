var DniValidator = (function () {
    function DniValidator() {
    }
    DniValidator.hasValidFormat = function (dniFormControl) {
        var dniRegex = /^[0-9]{8}[a-z, A-Z]$/;
        return dniRegex.test(dniFormControl.value) ?
            null :
            {
                "dni.hasValidFormat": {
                    valid: false
                }
            };
    };
    DniValidator.isValid = function (dniFormControl) {
        var value = dniFormControl.value;
        var validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
        if (value) {
            if (value.length == 9) {
                var dniNumber = parseInt(value.substring(0, 8));
                var validLetter = validLetters.charAt(dniNumber % 23);
                var currentLetter = value.substring(8, value.length).toUpperCase();
                return currentLetter === validLetter ?
                    null : {
                    "dni.isValid": {
                        valid: false
                    }
                };
            }
        }
        return false;
    };
    return DniValidator;
}());
export { DniValidator };
//# sourceMappingURL=dniValidator.js.map