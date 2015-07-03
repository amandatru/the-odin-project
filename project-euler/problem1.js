/* 
 * This program calculates the sum of all multiples of 3 or 5 below 1000.
 *
*/

var sumOfMult3 = function() { //function that calculates sum of all multiples of 3 below 1000
  var sum3 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 3 === 0) {
            sum3 += i;
        }
    }
return sum3;
}

var sumOfMult5 = function() { //function that calculates sum of all multiples of 5 below 1000
  var sum5 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 5 === 0) {
            sum5 += i;
        }
    }
return sum5;
}


var sumOfMult3and5 = function() { //function that calulcates sum of all multiples of 3 AND 5 below 1000
  var sum35 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            sum35 += i;
        }
    }
return sum35;
}

var sum3 = sumOfMult3();
console.log("The sum of the multiples of 3 below 1000 is: " + sum3);
var sum5 = sumOfMult5();
console.log("The sum of the multiples of 5 below 1000 is: " + sum5);
var sum35 = sumOfMult3and5();
console.log("The sum of the multiples of 3 and 5 below 1000 is: " + sum35);
var finalSum = sum3 + sum5 - sum35; //The sum of the multiples of 3 and 5 subtracted by multiples that are 
                                    //factors of both to get rid of duplicate numbers.
console.log("The sum of all multiples of 3 OR 5 below 1000 is: " + finalSum);


