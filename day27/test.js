
var pos;
var mylat;
var mylong;
navigator.geolocation.getCurrentPosition(function(position) {

                pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
               // console.log("Your latitude is "+ pos.lat);
                mylat = pos.lat;
                mylong = pos.lng;
              })
    // One-shot position request.

function showlat(){
	console.log("My latitude: " + mylat);
	console.log("My longitude: " + mylong);
}

setTimeout(showlat, 10000);

/*
test.js:18 My latitude: 40.398689999999995
test.js:19 My longitude: -74.27855389999999

https://www.google.com/maps/dir/40.398689999999995,-74.27855389999999/3%20Roxbury%20Court%20Freehold%20NJ%2007728
*/