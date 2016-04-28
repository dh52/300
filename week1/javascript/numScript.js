var sumOfNumbers = 0;
var count = 0;
var average = 0;
var concantenate;

function IsNumeric(input)
  {
    'use strict';
    return ((input - 0) == input) && ('' + input).trim().length > 0;
  }

function showInput() {
  var number_entered = document.getElementById("numberOrString").value;
  alert(number_entered);
  
  if (IsNumeric(number_entered)) 
  {
      sumOfNumbers = sumOfNumbers + parseInt(number_entered);
      count = count + 1;
      average = sumOfNumbers / count;
    
      document.getElementById('count').innerHTML = count;
      document.getElementById('sum-of-numbers').innerHTML = sumOfNumbers;
      document.getElementById('average').innerHTML = average;
  }
  else {
    concantenate();
  }
}

function resetValues() {
      sumOfNumbers = 0;
      count = 0;
      average = 0;
    
      document.getElementById('count').innerHTML = count;
      document.getElementById('sum-of-numbers').innerHTML = sumOfNumbers;
      document.getElementById('average').innerHTML = average;
  
      document.getElementById("user_input").value = "";

}

$("#reset-button").click(function(){
    resetValues();
});
