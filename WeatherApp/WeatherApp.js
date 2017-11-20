$(document).ready(function() {

//Holds the location of the users long/lat coordinates
var x;
var y;

//determine the coordinates of the computer user
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    x = position.coords.latitude;
    y = position.coords.longitude;
    var key = "1483de70e0e498a23a2af380c0e3f85f";
    var count = 0;

//Send a request with AJAX from url (modified to include lat/long coordinates and the key)
//Send data that we want to recieve the data in JSON format, english, and in units of metric (celscius)
      $.ajax ({
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&APPID="+key,
        data: {
          format: "json",
          lang: "en",
          units: "metric"
        },
        //Upon successful retrieval of response, execute the below codes
        success: function(response) {
          //Variables
          var icon_ext = response.weather[0].icon;
          var icon_src = "http://openweathermap.org/img/w/";
          var img_src_ext = icon_src+icon_ext+".png";

          //Binding objects to html
          $("#city").unbind().append(response.name);
          $("#temperature").html(Math.round(response.main.temp) + "&deg;C");
          $("#description").text(response.weather[0].description);
          $("#icon").attr("src", img_src_ext);
          $(".container").css("display", "block");

          //Conversion of temperature units when button is clicked.
          $("#convert").click(function(){
            if (count%2 === 0) {
              ctof();
              count++;
            }
            else {
              ftoc();
              count = 0;
            }
          });

            //conversion of celscius to fahrenheit
          function ctof() {
            var c_temp = response.main.temp;
            $("#temperature").html(Math.round(c_temp*(9/5)+32) + "&deg;F" );
            $("#convert").html("Convert to &deg;C")
          }

          //conversion of fahrenheit to celscius
          function ftoc(){
            $("#temperature").html(Math.round(response.main.temp) + "&deg;C");
            $("#convert").html("Convert to &deg;F")
          }


        }
      })
    })
  }
else {
  alert("Geolocation Not Supported");
}
});

//You can't run a local file in google chrome, so you either need to add http:// at the beginning, run it on a local host, or render it as a jsonp file.


//Commented code below is for a different API
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
