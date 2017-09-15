export class Birthday {

  constructor(birthday){
    this.birthday = birthday;
  }

  calculateAge() {
    let today = new Date();
    let birthday = new Date (this.birthday); //"October 13, 2014 11:13:00"
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
    }
}
