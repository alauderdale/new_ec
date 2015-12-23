$(document).load(function(){



    $('.masonry-grid').isotope({
      itemSelector: 'grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
      }
    });


});



$(document).ready(function () {		

	$.jribbble.setToken('f962c685fc691189846c15ca1053d0b5a716ff470cd448134f81616afa87e623');

	$.jribbble.users('alauderdale10').shots({'per_page': 90}).then(function(res) {
  var html = [];
  res.forEach(function(shot) {
	        html.push('<div class="shot grid-item">');
	        html.push('<img src="' + shot.images.normal + '" ');
	        html.push('alt="' + shot.title + '"></div>');
  });
  
  $('#dribbble-items').html(html.join(''));


});







	// $.jribbble.shots('Alauderdale10', function (playerShots) {
	//     var html = [];

	//     $.each(playerShots.shots, function (i, shot) {
	//         // html.push('<div class="shot"><a href="' + shot.url + '">');
	//         html.push('<div class="shot">');
	//         html.push('<img src="' + shot.image_url + '" ');
	//         html.push('alt="' + shot.title + '"></div>');
	//     });

	// $('#dribbble-portfolio').html(html.join(''));
	// }, {page: 1, per_page: 48});


});




