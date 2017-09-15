import { Age } from './../js/age.js';

describe ('Age', function(){
  it('should convert Earth age to age on Mars', function() {
    let age = new Age(37);
    expect(age.ageOnMars(37)).toEqual(69.56);
  });
});

describe ('Age', function(){
  it('should convert Earth age to age on Venus', function() {
    let age = new Age(37);
    expect(age.ageOnVenus(37)).toEqual(22.94);
  });
});


describe ('Age', function(){
  it('should convert Earth age to age on Mercury', function() {
    let age = new Age(37);
    expect(age.ageOnMercury(37)).toEqual(9);
  });
});

describe ('Age', function(){
  it('should convert Earth age to age on Mars', function() {
    let age = new Age(37);
    expect(age.ageOnMars(37)).toEqual(69.56);
  });
});

  describe ('Age', function(){
    it('should tell you how long you have left to live', function() {
      let age = new Age(37);
      expect(age.lifeExpectancyOnEarth(37, 4, 6, 6)).toEqual(65);
    });
  });

  describe('Age', function(){
    it('should tell you how long you have left to live on Mars', function() {
      let age = new Age(37);
      expect(age.lifeExpectancyOnMars(37)).toEqual(160);
    });
  });

  describe('Age', function(){
    it('should tell you how long you have left to live on Venus', function() {
      let age = new Age(37);
      expect(age.lifeExpectancyOnVenus(37)).toEqual(53);
    });
  });

  describe('Age', function(){
    it('should tell you how long you have left to live on Mercury', function() {
      let age = new Age(37);
      expect(age.lifeExpectancyOnMercury(37)).toEqual(29);
    });
  });

  describe('Age', function(){
    it('should tell you how long you have left to live on Jupiter', function() {
      let age = new Age(37);
      expect(age.lifeExpectancyOnJupiter(37)).toEqual(1447);
    });
  });

  describe('Age', function(){
    it('should tell you if you are past your prime on Mars', function() {
      let age = new Age(37);
      expect(age.haveYouPassedYourPrimeOnMars(37)).toEqual(false);
    });
  });

  describe('Age', function(){
    it('should tell you if you are past your prime on Mercury', function() {
      let age = new Age(37);
      expect(age.haveYouPassedYourPrimeOnMercury(37)).toEqual(true);
    });
  });

  describe('Age', function(){
    it('should tell you if you are past your prime on Venus', function() {
      let age = new Age(37);
      expect(age.haveYouPassedYourPrimeOnVenus(100)).toEqual(false);
    });
  });
