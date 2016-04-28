//so below is th last attempt and I was trying different versions that didn't work. When the form showed and I would click the button what I wanted to hide kinda flickered but stayed.
$(document).ready(
    function(){
        $("#btn1").click(function () {
            $("#data-form").show();
            $("#data-table").hide();         
        });
        
        // TDS This line looks for your data table using jquery and then uses jquery's hide() method.
        // TDS http://api.jquery.com/hide/
        // TDS To unhide it, jquery has a show() method.
        // TDS http://api.jquery.com/show/
        //  So if you want to hide a div, use .hide(). To show a div use .show()
        $("#data-table-2").hide();

        // TDS http://api.jquery.com/toggleclass/
        // TDS http://api.jquery.com/addclass
        // TDS http://api.jquery.com/removeclass/
        // TDS You could also use one of the methods above to add/remove the hidden class to your divs
        //  So if you want to hide a div, use .addclass("hidden"). To remove a class use .removeclass("hidden")
        $("#data-table").toggleClass("hidden");
        

    });

// TDS I added the next 2 functions
function toggleHide2() {
    $("#data-table-2").show();
}

function toggleHide3() {
    $("#data-table-3").toggleClass("hidden");
}



//Not sure how to tackle the append.  Do I create two arrays for two <td>? not clear how to append that into the table or where to even start.

// TDS I recommend reading these to start.  These will show you how to add a row to the bottom of a 
//    table.
// TDS http://stackoverflow.com/questions/2160890/how-do-you-append-rows-to-a-table-using-jquery
// TDS http://stackoverflow.com/questions/171027/add-table-row-in-jquery
// TDS http://viralpatel.net/blogs/dynamically-add-remove-rows-in-html-table-using-javascript/

// TDS -- Have you talked about JSON (javascript object notation) in your class yet? Personally, I would create my array as:
//var sportsTeams = [];   // This will create an empty array
//var sportTeam1 = { "teamName" : "Silverbacks", "sport" : "softball" }; // This creates a JSON object.
// http://www.w3schools.com/jsref/jsref_obj_array.asp
// sportTeams.push(sportTeam1); // This adds the team to your array.

// To display your data then it's something like:
// for (int i; i < sportTeams.length; i++)
// {
//    tableName.append("<tr><td>sportTeams[i].teamName</td><td>sportTeams[i].sport</td></tr>");
// }
