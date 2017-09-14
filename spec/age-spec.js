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
