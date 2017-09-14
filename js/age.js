export class Age {

  constructor(age){
    this.age = age;
  }

  inSeconds(age) {
    let ageInSeconds = age * 31536000;
    return ageInSeconds;
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

  lifeExpectancyOnEarth(age, smoker, stress, diet){
    let yearsLeftToLive = 122 - age;
    if (smoker > 3 && stress > 5 && diet > 5) {
      return yearsLeftToLive -= 20;
    }
    else {
      return yearsLeftToLive;
    }
  }

  lifeExpectancyOnMars(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnMars = thisAge.ageOnMars(122) - thisAge.ageOnMars(age);
    return Math.round(lifeExpectancyOnMars);
  }
}
