let endTime = new Date("Sep 07 2023 15:06:25").getTime();

let counter = setInterval(() => {
  let now = new Date().getTime();
  let difference = endTime - now;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  if (days < 10) {
    document.getElementById("day").innerHTML = "0" + days;
  }
  if (hours < 10) {
    document.getElementById("hour").innerHTML = "0" + hours;
  }
  if (minutes < 10) {
    document.getElementById("minute").innerHTML = "0" + minutes;
  }
  if (seconds < 10) {
    document.getElementById("second").innerHTML = "0" + seconds;
  }

  if (difference < 0) {
    clearInterval(counter);
  }
}, 1000);
