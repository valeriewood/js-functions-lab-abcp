
function happyHolidays() {
  var a = "Happy holidays!";
 return a;
}
console.log(a);



  function happyHolidaysTo(name) {
   return 'Happy holidays,' + ' ' + name + '!';
 }
 var personsName = 'Janet';
happyHolidaysTo(personsName); 

 /* Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `Happy ${holiday}, ${name}!` */
function happyHolidayTo(holiday, name) {
  var holidayName = happyHolidayTo;
  return holiday + name;
}
happyHolidayTo("Happy holidays", "Janet!");


 /* Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `Happy ${holiday}, ${name}!` */
function happyHolidayTo(holiday, name) {
  var holidayName = happyHolidayTo;
  return holiday + name;
}
happyHolidayTo("Happy holidays", "Janet!");

function holidayCountdown(holiday, days) {
  return "It\'s' " + days +" days until " + holiday + "!";
}
