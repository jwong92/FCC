$(document).ready(function() {

//Holds the location of the users long/lat coordinates
var x;
var y;

//determine the coordinates of the computer user
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;
    key = "1483de70e0e498a23a2af380c0e3f85f";

      $.ajax ({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&APPID="+key,
        data: {
          format: "json",
          lang: "en",
          units: "metric"
        },
        success: function(response) {
          var icon_ext = response.weather[0].icon;
          var icon_src = "http://openweathermap.org/img/w/";
          var img_src_ext = icon_src+icon_ext+".png";

          $("#city").unbind().append(response.name);
          $("#temperature").html(response.main.temp + "&deg;" + "C");
          $("#description").text(response.weather[0].description);
          $("#icon").attr("src", img_src_ext);

          console.log(response);
        }
      });
  });
}
else {
  alert("Geolocation Not Supported");
}

//You can't run a local file in google chrome, so you either need to add http:// at the beginning, run it on a local host, or render it as a jsonp file.

// function showTheWeather() {
//   $.ajax ({
//     url: "http://api.apixu.com/v1/current.json?key=2237c8a5abf14d98bde200335170711&q=" + x +","+y,
//     data: {
//       format: "json",
//       lang: "en"
//     },
//     success: function(response) {
//icon holds the png image (minus the http)
          // var icon = response.current.condition.icon;
          // $("#image").attr("src", "http:"+icon);
          // $("#temperature").text(response.current.temp_c);
          // $("#condition-text").text(response.current.condition.text);
//       console.log(response);
//     }
//   });
// }
//
// showTheWeather();

});
