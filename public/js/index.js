$(document).ready(function() {

	$("img.lazy").lazyload({
		threshold: 800,
		effect: "fadeIn"
	});

	$('.hand-svg').click(function(){
		$(this).addClass('high-five');
		setTimeout(function(){
			$('.hand-svg').removeClass('high-five');
		}, 100);
	});

});
