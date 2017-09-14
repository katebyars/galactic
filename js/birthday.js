export class Birthday {
  constructor(birthdayString){
    this.birthdayString = birthdayString; // birthdateString format = "YYYYMMDD"
  }

  calculateAge() {
    var today = new Date();
    var birthday = new Date(this.birthdayString);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age-10;
  }

}
