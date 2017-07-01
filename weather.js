//var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&APPID=346918e4da01ace32c1656f39944da68";

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&APPID=346918e4da01ace32c1656f39944da68";
      $.getJSON(url, function(json) {
          $('#location').html(json.name + ", " + json.sys.country);
          $('#temperature').html(Math.round((json.main.temp * 9/5) - 459.67) + " &deg; F");
          $('#weather').html(json.weather[0].main);
      });
    });
  }
});