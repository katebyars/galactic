export class Age {
  constructor(age){
    this.age = age;
  }

  // calculateAge(birthday, today){
  //   let today = 0;
  //   let age = today - birthday;
  //   return age;
  // }
  inSeconds(age) {
    let ageInSeconds = age * 31536000;
    return ageInSeconds;
  }

  yourAge(birthday){

  }

  ageOnMars(age){
    let ageOnMars = age *1.88;
    return ageOnMars;
  }

  ageOnVenus(age){
    let ageOnVenus = age * 0.62;
    return ageOnVenus;
  }

  ageOnMercury(age){
    let ageOnMercury = age * 0.24;
    return Math.round(ageOnMercury);
  }

  ageOnJupiter(age){
    let ageOnJupiter = age *11.86;
    return ageOnJupiter;
  }
  //
  // lifeExpectancyOnEarth(age){
  //   let yearsLeftToLive = 122 - age;
  //   if
  //   righty or lefty (left -9)
  //   sleep per night(less than 6 h per night -?)
  //
  //   return yearsLeftToLive;
  // }
}
