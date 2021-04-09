var previous;
var next;
var result;

 var result = document.getElementById("result");

var operator;
var one = document.getElementsByClassName('one')[0];

one.addEventListener("click", function() {
 previous=1;
  console.log(previous);
  result.innerHTML = previous;
});

var two = document.getElementsByClassName('two')[0];

two.addEventListener("click", function() {
 previous=2;
  console.log(previous);
  result.innerHTML = previous;
});
var three = document.getElementsByClassName('three')[0];

three.addEventListener("click", function() {
 previous=3;
  console.log(previous);
  result.innerHTML = previous;
});
var four = document.getElementsByClassName('four')[0];

four.addEventListener("click", function() {
 previous=4;
  console.log(previous);
  result.innerHTML = previous;
});
var five = document.getElementsByClassName('five')[0];

five.addEventListener("click", function() {
 previous=5;
  console.log(previous);
  result.innerHTML = previous;
});
var six = document.getElementsByClassName('six')[0];

six.addEventListener("click", function() {
 previous=6;
  console.log(previous);
  result.innerHTML = previous;
});
var seven = document.getElementsByClassName('seven')[0];

seven.addEventListener("click", function() {
 previous=7;
  console.log(previous);
  result.innerHTML = previous;
});
var eight = document.getElementsByClassName('eight')[0];

eight.addEventListener("click", function() {
 previous=8;
  console.log(previous);
  result.innerHTML = previous;
});
var nine = document.getElementsByClassName('nine')[0];

nine.addEventListener("click", function() {
 previous=9;
  console.log(previous);
  result.innerHTML = previous;
});


var plus = document.getElementsByClassName('plus')[0];

plus.addEventListener("click", function() {
 operator= '+' ;
  console.log(operator);
  result.innerHTML = operator;
});

var equals = document.getElementsByClassName('equals')[0];

equals.addEventListener("click", function() {
 results=eval(previous+' '+operator+' '+previous);
 result.innerHTML = results;
  console.log(results);
  previous=results;

});

var cancel = document.getElementsByClassName('cancel')[0];

cancel.addEventListener("click", function() {
 
 result.innerHTML = "";


});






