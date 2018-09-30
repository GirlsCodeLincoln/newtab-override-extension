var backgrounds = [
  "https://i.redditmedia.com/45JCXfJd9UKnGMIVkJ9bzCxAafcpXbAN3FwR3lF1FLM.jpg?s=5e876b86af49dd430e8c37f4ff93fdb9",
  "https://i.redditmedia.com/rF-A898kd0gQfaZ9vrPakO6g45quAzZ4bVpQH4k1PzY.png?s=a7a40456b7c56b7d066b0ea8c6909746",
  "https://i.redd.it/1bc07aej68p11.jpg",
  "https://i.redd.it/sh5mtowtl7p11.jpg",
  "https://i.redd.it/20ibzn4ipep11.jpg"
];

var randomIndex = Math.floor(Math.random() * backgrounds.length);

document.body.style.backgroundImage = 'url("' + backgrounds[randomIndex] + '")';
document.body.style.backgroundSize = "cover";

var timeElement = document.getElementById("current-date");

var date = new Date();
var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

var newDate = new Date(utc + (3600000 * -5));

var timeString = newDate.toTimeString();
timeString = timeString.replace(/GMT.+/g, '');

timeElement.innerHTML = newDate.toDateString() + "\n" + timeString;
