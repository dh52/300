var map;
var zoomVal = 16;
  
function initMap() {
  var mapDiv = document.getElementById('map');
  
    map = new google.maps.Map(mapDiv, {
    center: {lat: 47.651371, lng: -122.349929},
    zoom: 16
  });

  var marker = new google.maps.Marker ( {
    position: {lat: 47.651371, lng: -122.349929}
  } );
  
  marker.setMap(map);
  var infoWindow = new google.maps.InfoWindow( {
    content: 'Fremont Analytical'
  } );
  
  marker.addListener( 'click', function( ) {
    infoWindow.open( map, marker );
  } );
  }


$('#submitform').on( 'click', submitForm );

//$('#submitform').off();
//$('#submitform').on( 'click', function( evt ) {
 function submitForm( evt ) { 
  
  alert("Your form has been submitted. Thank you");
  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'dhaugen'
  
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var eMail = $('#eMail').val();
  var compName = $('#compName').val();
  var proManager = $('#proManager').val();
  var phoneNum = $('#phoneNum').val();
  var pickAdd = $('#pickAdd').val();
  var pickAdd2 = $('#pickAdd2').val();
  var cityName = $('#cityName').val();
  var stateName = $('#stateName').val();
  var zipCode = $('#zipCode').val();
  var couName = $('#couName').val();
  var numCool = $('#numCool').val();
  var comNum = $('#comNum').val();
  var specIns = $('#specIns').val();
  
  var email = $('#create-email').val();
  var password = $('#create-password').val();
  var confirm = $('#create-confirm-password').val();
  
    evt.preventDefault( );
  
  $.ajax ( baseUrl + collection,
  {
    method: 'POST',
    data: {
      firstName: firstName,
      lastName: lastName,
      eMail: eMail,
      compName: compName,
      proManager: proManager,
      phoneNum: phoneNum,
      pickAdd: pickAdd,
      pickAdd2: pickAdd2,
      cityName: cityName,
      stateName: stateName,
      zipCode: zipCode,
      couName: couName,
      numCool: numCool,
      comNum: comNum,
      specIns: specIns
      
    },
    
    success: logCreateResult,
    error: logAjaxError
    } );
  }

function logCreateResult( data ) {
  console.log( 'Data Received: ', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
  console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown);
  }

//$(document).ready(function(){
   // $("#submitform").submit(function(){
    //    alert("Form submitted");
    //});
//});