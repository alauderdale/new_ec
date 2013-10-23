$(document).ready(function(){

$( "#menu-button" ).click(function() {
  $( ".menu-drop" ).toggleClass( "menu-show" );
  $( "body" ).toggleClass( "nav-open" );
  $( "#menu-button i" ).toggleClass( "icon-reorder icon-remove" );

});

});
