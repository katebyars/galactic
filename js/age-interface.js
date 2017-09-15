import { Age } from './../js/age.js';
import { Birthday } from './../js/birthday.js';

$(document).ready(function() {
  $("#birthday-form").submit(function(event){
    event.preventDefault();
    let month = $("#month").val();
    let day = $("#day").val();
    let year = $("#year").val();
    let birthday = month.concat(" ", day, ", ", year, " 12:00:01");

    let smoker = $("#smoker").val();
    let diet = $("#diet").val();
    let stress = $("#stress").val();

    let yourBirthday = new Birthday(birthday);
    let yourAge = yourBirthday.calculateAge();
    let earthAge = new Age(yourAge);
    let venus = earthAge.ageOnVenus(yourAge);
    let jupiter = earthAge.ageOnJupiter(yourAge);
    let mars = earthAge.ageOnMars(yourAge);
    let mercury = earthAge.ageOnMercury(yourAge);

    let lifeExpectancyOnEarth = earthAge.lifeExpectancyOnEarth(yourAge, smoker, stress, diet);

    $("#output").append("<li> Your age on Earth:  " + yourAge + "</li>" +"<li> Your age on Venus:  " + venus + "</li>" +"<li> Your age on Jupiter:  " + jupiter + "</li>" + "<li> Your age on Mars:  " + mars + "</li>" + "<li> Your age on Mercury:  " + mercury + "</li>");

    $("vitalSigns").append("<li> On earth: " +  lifeExpectancyOnEarth);

    $("input").val("");
  });

});
