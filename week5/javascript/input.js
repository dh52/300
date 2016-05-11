//checkbox
$("#checkboxInput").change(function() {
  var $input = $(this);
  if ($input.prop("checked"))
  {
    $("#checkboxOutput").html("true");
  }
  else
  {
    $("#checkboxOutput").html("false");
  }
}).change();

//radio
$('input:radio').change(function(){
    var $value = $("form input[type='radio']:checked").val();
//alert("Value of Changed Radio is : " +value);
    $("#radiocheck").html($value);
});

//text box
$("#textInput").change(function() {
  var $textInput = $("#textInput").val();
  $("#textOutput").html($textInput);
}).change();

//text area
$("#textareaInput").change(function() {
  var $textareaInput = $("#textareaInput").val();
  $("#textareaOutput").html($textareaInput);
}).change();

//select
$("#selectInput").change(function() {
  var $selectInput = $("#selectInput").val();
  $("#selectOutput").html($selectInput);
}).change();


