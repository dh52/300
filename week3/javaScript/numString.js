var numbers = [];
var numCount = 0;
var numSum = 0;
var average;
var concantenated;

DisplayResult ( );

$("#submit").on( "click", calculate );
$("#reset").on( "click", reset );
$("#number-string").on( "focus", clearMessage );


function calculate( evt ) {
  var val = $("#number-string").val();
  var num = parseFloat( val );
  if (isNaN( num ) )  {
    concantenate()
  } else {
    calculateNumber( num );
  }
  evt.preventDefault( );
}

function calculateNumber( number ) {
  numbers.push( number );
  computeStats( );
  displayStats( );
}