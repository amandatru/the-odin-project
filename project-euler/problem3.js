/*
 * Problem 3 Project Euler
 * This program calculates the largest prime factor of the number 600851475143. 
*/

var factor = function(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
    else {
      return true;
    }
  }
};

var oddFactor = function(input) {
  var divisor = input - 1;
  while (divisor > 1) {
    if (input % divisor === 0 && factor(divisor)) {
      return divisor;
    }
     divisor--;
    }
  return input;
};
  
var num = 400;
    var factor = oddFactor(num); 
    console.log("Largest prime factor of 600851475143 is: " + factor); 
  

console.log("holy shit im sleepy");
