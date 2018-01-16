 /* Write a function named happyHolidays. This function should not accept any parameters and should return the string "Happy holidays!".
  write your code below! */
function happyHolidays() {
  var a = "Happy holidays!";
 return a;
}
console.log(a);

 /* Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `Happy ${holiday}, ${name}!` */
function happyHolidaysTo(name) {
  var nameto = "PeopleBornInJanuary!";
  return "Happy holidays!" + name + "!";
}

function happyHolidayTo(holiday, name) {
  return "Happy" + holiday, name + "!";
}


function holidayCountdown(holiday, days) {
  return "It\'s' " + days +" days until " + holiday + "!";
}
