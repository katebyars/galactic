export class Age {
  constructor(age){
    this.age = age;
  }

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
    let ageOnVenus = age *.62;
    return ageOnVenus;
  }

  ageOnMercury(age){
    let ageOnMercury = age *.24;
    return Math.round(ageOnMercury);
  }

  ageOnJupiter(age){
    let ageOnJupiter = age *11.86;
    return ageOnJupiter;
  }

  lifeExpectancy(){
    //mars
    //venus
    //mercury
    //jupiter
    //earth
  }
}
