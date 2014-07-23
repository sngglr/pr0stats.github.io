// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53004741-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
	// Image toggle (show large image on click)
	$('.image-toggle').hide();
	$('.image-toggle-button').click(function() {
		$(this).next('.image-toggle').show();
		$(this).hide();
	});

	// Hide all submenu items that don't have corresponding h2 Headlines
	$('.toc li').hide();
	$('.toc li').each(function() {
		var href = $(this).find('a').attr('href');
		if ($("h2"+href).length > 0){
			$(this).show();
		}
	});
}); 

$(function() {
	// Thumbnail hover and click raw images
	$('.thumbnail').before('<span class="thumbnail-hover-overlay">Klick für Vollbild</span>');
	
	$(".thumbnail-hover-overlay").css("opacity", "0");

	// mouse over
	$(".thumbnail-hover-overlay").hover(function() {
		$(this).stop().animate({
			opacity : .85
		}, "fast");
	},

	// mouse out
	function() {
		$(this).stop().animate({
			opacity : 0
		}, "fast");
	});
});