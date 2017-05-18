const hasValidFormat = (value: string): boolean => {
  const dniRegex = /^[0-9]{8}[a-z, A-Z]$/;

  return dniRegex.test(value);
}

const isValidDNI = (value: string): boolean => {
  console.log(value);
  if(value){
    if (value.length == 9){
      var dniNumber: number = parseInt(value.substring(0,8));
      var validLetter: string = getValidLetterByDNINumber(dniNumber);
      var currentLetter = value.substring(8,value.length).toUpperCase();

      console.log("CurrentLetter: " + currentLetter + ", ValidLetter: " + validLetter);
      return currentLetter === validLetter;
    }
  }
  
  return true;
};

var getValidLetterByDNINumber = (dniNumber: number) : string => {
  console.log(dniNumber);
  var letterIndex = dniNumber % 23;
  var validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';

  return validLetters.charAt(letterIndex)
};

export {
  hasValidFormat,
  isValidDNI
}