var age = prompt("How old are you?");
var leapYears = age/4;
var ageInDays = age * 365 - leapYears;

console.log("You are " + ageInDays + " days old!");