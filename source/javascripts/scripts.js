$(document).ready(function(){


	$( "#menu-button" ).click(function() {
	  $( ".menu-drop" ).toggleClass( "menu-show" );
	  $( "body" ).toggleClass( "nav-open" );
	  $( "#menu-button i" ).toggleClass( "icon-reorder icon-remove" );

	});


	$('section[data-type="background"]').each(function(){
	var $bgobj = $(this); // assigning the object
	$(window).scroll(function() {
	var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
	// Put together our final background position
	var coords = '50% '+ yPos + 'px';
	// Move the background
	$bgobj.css({ backgroundPosition: coords });
	});
	});

});
