import { Age } from './../js/age.js';

$(document).ready(function() {
  $('#format').click(function() {
    let age = $('#age').val();
    $('#age').val("");
    $.ajax({
      url: `GEThttps://life-left.p.mashape.com/time-left?q=${currentAge}&appid=yCjNtPiKz0mshGiFXD5vGa10s9jIp1C0weTjsnQfJPywKsx8xp`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showYearsLeft').text(`The humidity in ${city} is ${response.data.yearsLeft}%`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
