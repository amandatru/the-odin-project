/* 
 * Euler-Project Problem 2
 * This program calculates the sum of the even numbers of the fibonacci sequence up to 4 million.
 * 
*/

var num1 = 1; //first number in fibonacci seq
var num2 = 2; //second number in fibonacci seq
var evenNumSum = 2; //Sum of even numbers initialized to 2 as starting amt

var fibonacci = function(num1, num2) { //fibonacci sequence function
  next = num1 + num2; //next number in sequence calculated by previous 2 numbers
  console.log(num1 + " " + num2 + " " + next);
  if (next % 2 === 0) { //if number is even, add to total even number sum
    evenNumSum += next;
    console.log("Sum so far: " + evenNumSum);
  }
  while (next < 4000000) { //while loop that uses recursive function calling to calculate the sum of the even numbers 
                           //until the range of 4 million is reached
  fibonacci(num2, next);
 } 
    return evenNumSum; //when 4 mil is reached, breaks out of recursive call and sum is returned
}

var sum = fibonacci(num1, num2);
console.log("Total sum: " + sum);
