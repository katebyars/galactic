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

  haveYouPassedYourPrime(age) {
    let thisAge = new Age(age);
    let maxAge = new Age(122);

    let ageOnMars = thisAge.ageOnMars;
    let ageOnVenue = thisAge.ageOnVenus;
    let ageOnMercury = thisAge.ageOnMercury;
    let ageOnJupiter = thisAge.ageOnJupiter;

    let lifeExpectancyOnJupiter = lifeExpectancyOnJupiter(122);
    let lifeExpectancyOnMercury = lifeExpectancyOnMercury(122);
    let lifeExpectancyOnVenus = lifeExpectancyOnVenus(122);
    let lifeExpectancyOnMars = lifeExpectancyOnMars(122);
  }
}
