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
    let yourAge = Math.round(yourBirthday.calculateAge());
    let earthAge = new Age(yourAge);
    let venus = Math.round(earthAge.ageOnVenus(yourAge));
    let jupiter = Math.round(earthAge.ageOnJupiter(yourAge));
    let mars = Math.round(earthAge.ageOnMars(yourAge));
    let mercury = Math.round(earthAge.ageOnMercury(yourAge));

    let lifeExpectancyOnEarth = earthAge.lifeExpectancyOnEarth(yourAge, smoker, stress, diet);
    let lifeExpectancyOnMars = earthAge.lifeExpectancyOnMars(yourAge, smoker, stress, diet);
    let lifeExpectancyOnJupiter = earthAge.lifeExpectancyOnJupiter(yourAge, smoker, stress, diet);
    let lifeExpectancyOnMercury = earthAge.lifeExpectancyOnMercury(yourAge, smoker, stress, diet);
    let lifeExpectancyOnVenus = earthAge.lifeExpectancyOnVenus(yourAge, smoker, stress, diet);

    $("#output").html("<li> Your age on Earth:  " + yourAge + "</li>" +"<li> Your age on Venus:  " + venus + "</li>" +"<li> Your age on Jupiter:  " + jupiter + "</li>" + "<li> Your age on Mars:  " + mars + "</li>" + "<li> Your age on Mercury:  " + mercury + "</li>");

    $("#vitalSigns").html("<li> on Earth: " +  lifeExpectancyOnEarth + "</li>" + "<li> on Venus: " +  lifeExpectancyOnVenus + "</li>" + "<li> on Jupiter: " +  lifeExpectancyOnJupiter + "</li>" + "<li> on Mars: " +  lifeExpectancyOnMars + "</li>"  + "<li> on Mercury: " +  lifeExpectancyOnMercury + "</li>");

    $("input").val("");
  });

});
