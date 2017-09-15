import { Age } from './../js/age.js';
import { Person } from './../js/person.js';
import { Birthday } from './../js/birthday.js';

$(document).ready(function() {
  $("#birthday-form").submit(function(event){
    event.preventDefault();
    let month = $("#month").val();
    let day = $("#day").val();
    let year = $("#year").val();
    let birthday = month.concat(" ", day, ", ", year, " 12:00:01");

    let yourBirthday = new Birthday(birthday);
    let yourAge = yourBirthday.calculateAge();
    let earthAge = new Age(yourAge);
    let venus = earthAge.ageOnVenus(yourAge);
    let jupiter = earthAge.ageOnJupiter(yourAge);
    let mars = earthAge.ageOnMars(yourAge);
    let mercury = earthAge.ageOnMercury(yourAge);
    let newPerson = new Person(earthAge, venus, jupiter, mars, mercury);
    $("#output").append("<li> Your age on Earth:  " + yourAge + "</li>" +"<li> Your age on Venus:  " + venus + "</li>" +"<li> Your age on Jupiter:  " + jupiter + "</li>" + "<li> Your age on Mars:  " + mars + "</li>" + "<li> Your age on Mercury:  " + mercury + "</li>");

    $("input").val("");

  });
});
