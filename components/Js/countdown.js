var countDownDate = new Date("Mar 1, 2023 21:28:25").getTime();
var x = setInterval(function () {
  // Important dates
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      
  // Time measures until release
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
  // Replace countdown element with time remaining
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If time is 0, set countdown element to released text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "We have released!";
  }
}, 1000);
