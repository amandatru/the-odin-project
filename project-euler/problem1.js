var sumOfMult3 = function() {
  var sum3 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 3 === 0) {
            sum3 += i;
        }
    }
return sum3;
}

var sumOfMult5 = function() {
  var sum5 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 5 === 0) {
            sum5 += i;
        }
    }
return sum5;
}


var sumOfMult3and5 = function() {
  var sum35 = 0;
    for (var i =0; i<1000; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            sum35 += i;
        }
    }
return sum35;
}

var sum3 = sumOfMult3();
console.log(sum3);
var sum5 = sumOfMult5();
console.log(sum5);
var sum35 = sumOfMult3and5();
console.log(sum35);
var finalSum = sum3 + sum5 - sum35;
console.log(finalSum);


