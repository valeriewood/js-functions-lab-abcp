
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
  return "Happy " + holiday + " " + name;
}
var returnValue = happyHolidayTo("Independence Day", "Janet");
console.log(returnValue);



/* Write a function named holidayCountdown. This function should accept two parameters, the holiday name and number of days till that holiday. The function should return the string `It's ${days} days until ${holiday}!` */

  
  var holidayCountdown = function(holiday, days)
{
    return "It\'s' " + days +" days until " + holiday + "!";    
}
holidayCountdown(20, "Mother's Day!");
