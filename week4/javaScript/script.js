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

function moveTo() {
  var panPoint = new google.maps.LatLng(document.getElementById("lat").value,
                                        document.getElementById("lng").value);
  zoomVal = document.getElementById("zoom").value; 
  map.setZoom(zoomVal);     

  map.panTo(panPoint);
     }