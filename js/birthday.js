export class Birthday {
  constructor(birthdayString){
    this.birthdayString = birthdayString; // birthdateString format = "YYYYMMDD"
  }

  calculateAge() {
    let today = new Date();
    let birthday = new Date(this.birthdayString);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age-10;
  }

}
