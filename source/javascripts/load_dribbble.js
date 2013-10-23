$(window).load(function(){


var $container = $('#dribbble-portfolio')
// initialize Isotope
$container.isotope({
  // options...
  itemSelector : '.shot',
  resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / 3 }
});

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() / 3 }
  });
});


});



$(document).ready(function () {		


	$.jribbble.getShotsByPlayerId('Alauderdale10', function (playerShots) {
	    var html = [];

	    $.each(playerShots.shots, function (i, shot) {
	        html.push('<div class="shot"><a href="' + shot.url + '">');
	        html.push('<img src="' + shot.image_url + '" ');
	        html.push('alt="' + shot.title + '"></a></div>');
	    });

	    $('#dribbble-portfolio').html(html.join(''));
	}, {page: 1, per_page: 50});


});




