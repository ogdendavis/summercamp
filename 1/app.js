console.log('Welcome to the console!');

var noon = 12;
var evening = 18;

// Getting it to show the current time on the page
function showCurrentTime() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
	  meridian = "PM";
  }

  if (hours > noon) {
	  hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};
showCurrentTime();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);
