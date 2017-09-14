import { Birthday } from './../js/birthday.js';

describe ('Birthday', function(){
  it('should calculate age based on birthday', function() {
    let birthday = new Birthday(19800503);
    expect(birthday.calculateAge()).toEqual(37);
  });


  beforeEach(function() {
    var moment = require('moment');
    let now = moment();
  });

  it('should show how beforeEach() works', function() {
    console.log(now);
  });
}
