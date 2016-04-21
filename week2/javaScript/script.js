
$(document).ready(function (){
  
  var teamNames = [];
  var sports = [];
  var count = 0;
  
  $("#btn1").click(function () {
            $("#data-form").show();
            $("#data-table").hide();         
        });
  
  $("#btn2").click(function () {
            teamNames[count] = document.getElementById("team").value;
            sports[count] = document.getElementById("sport").value;
            count = count + 1;
   //$('#sportTable > tbody').append('<tr><td>' + teamNames[0] + '</td><td> + sports[0] + </td></tr>');       
  $('#sportTable > tbody').append('<tr><td>' + teamNames[0] + '</td><td>' + sports[0] + '</td></tr>');
    //$('#sportTable tbody').append('<tr class="child"><td>'teamNames[0]'</td></tr>');
    //$('#sportTable > tbody:last-child').append('<tr>...</tr><tr>...</tr>');
    //$('.inner').append("<tr><td>table data</td> <td>table data</td></tr>");

            $("#data-form").hide();
            $("#data-table").show();         
        });
  
  $("#btn3").click(function () {
            $("#data-form").hide();
            $("#data-table").show();         
        });
    });

