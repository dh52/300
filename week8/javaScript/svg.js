  // Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 620, 600);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

//paper.circle(320, 240, 60).animate({fill: "yellow", stroke: "#000", "stroke-width": 80, "stroke-opacity": 0.5}, 2000);

var rect1 = paper.rect( 30, 20, 100, 50 );
rect1.attr({
  fill: 'rgb( 54, 3, 23 )'
});

var rect = paper.rect( 10, 100, 130, 100 );
var circle = paper.circle( 75, 280, 60 );
rect.attr( { fill: '#a2c700' } );
circle.attr(620, 140, 60).animate({fill: "yellow", stroke: "#000", "stroke-width": 50, "stroke-opacity": 0.5}, 1000);

rect.click( function( ) {
    var curColor = this.attr( 'fill' );
    var newColor = (curColor === '#9eff61')  ?  '#c70053'  :  '#4900c7';
    this.attr( { fill: newColor } );
} );

circle.mouseover( function( ) {
    this.attr( { fill: '#c70000' } );
} );

circle.mouseout( function( ) {
    this.attr( { fill: '#00c4c7' } );
} );

var anim = Raphael.animation({transform: "r360"}, 2500).repeat(Infinity);
rect.animate(anim);


