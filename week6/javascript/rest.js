$('#create-submit').off();
$('#create-submit').on( 'click', function( evt ) {
  
  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'dhaugen'
  var car = $('#create-car').val();
  var color = $('#create-color').val();
  
  evt.preventDefault( );
  
  $.ajax ( baseUrl + collection,
  {
    method: 'POST',
    data: {
      car: car,
      color: color
    },
    
    success: logCreateResult,
    error: logAjaxError
    } );
  } );

function logCreateResult( data ) {
  console.log( 'Data Received: ', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
  console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown);
  }
  
  //read//
  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'dhaugen';
  
  $.ajax( baseUrl + collection,
         {
    method: 'GET',
    success: logListResult,
    error: logAjaxError
  } );

function logListResult( data ) {
  console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
  console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown);
  }
  
//id//
$('#read-submit').off();
$('#read-submit').on( 'click', function( evt ) {
  
  var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
  var collection = 'dhaugen';
  var id = $('user_input').val();
  
  evt.preventDefault( );
  
  $.ajax ( baseUrl + collection + '/' + id,
  {
    method: 'GET',
    success: logReadResult,
    error: logAjaxError2
    } );
  } );

function logReadResult( data ) {
  console.log( 'Data received:', data );
}

function logAjaxError2( jqXHR, textStatus, errorThrown ) {
  console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown);
  }