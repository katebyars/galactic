export class Birthday {
  constructor(birthdayString){
    this.birthdayString = birthdayString; // birthdateString format = "YYYYMMDD"
  }

  calculateAge(){
  let age = moment(this.birthdayString, "YYYMMDD").fromNow();
  return age;
  }

}
