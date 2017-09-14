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

  lifeExpectancyOnVenus(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnVenus = thisAge.ageOnVenus(122) - thisAge.ageOnVenus(age);
    return Math.round(lifeExpectancyOnVenus);
  }
  lifeExpectancyOnMercury(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnMercury = thisAge.ageOnMercury(122); thisAge.ageOnMercury(age);
    return Math.round(lifeExpectancyOnMercury);
  }

  lifeExpectancyOnJupiter(age) {
    let thisAge = new Age(age);
    let lifeExpectancyOnJupiter = thisAge.ageOnJupiter(122); thisAge.ageOnJupiter(age);
    return Math.round(lifeExpectancyOnJupiter);
  }

  haveYouPassedYourPrimeOnMars(age) {
    let thisAge = new Age(age);
    let ageOnMars = thisAge.ageOnMars;
    let lifeExpectancyOnMars = lifeExpectancyOnMars(122);
    if (ageOnMars>lifeExpectancyOnMars) {
      return true;
    }
  }

  haveYouPassedYourPrimeOnVenus(age){
    let thisAge = new Age(age);
    let ageOnVenus = thisAge.ageOnVenus;
    let lifeExpectancyOnVenus = lifeExpectancyOnVenus(122);
    if (ageOnVenus>lifeExpectancyOnVenus) {
      return true;
    }
  }

  haveYouPassedYourPrimeOnMercury(age){
    let thisAge = new Age(age);
    let ageOnMercury = thisAge.ageOnMercury;
    let lifeExpectancyOnMercury = lifeExpectancyOnMercury(122);
    if (ageOnMercury>lifeExpectancyOnMercury) {
      return true;
    }
  }

  haveYouPassedYourPrimeOnJupiter(age){
    let thisAge = new Age(age);
    let ageOnJupiter = thisAge.ageOnJupiter(age);
    let lifeExpectancyOnJupiter = thisAge.lifeExpectancyOnJupiter(122);
    if (ageOnJupiter>lifeExpectancyOnJupiter) {
      return true;
    }
    else {
      return false;
    }
  }

}
