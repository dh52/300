var sumOfNumbers = 0;
var count = 0;
var average = 0;

function IsNumeric(input)
  {
    return ((input - 0) == input) && ('' + input).trim().length > 0;
  }

function showInput() {
  var number_entered = document.getElementById("user_input").value;

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
    alert("Value is not a number.  Please enter a number.");
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
