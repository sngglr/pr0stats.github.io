// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53004741-1', 'auto');
ga('send', 'pageview');


// Image toggle
$(document).ready(function() {
	$('.image-toggle').hide();
	$('.image-toggle-button').click(function() {
		$(this).next('.image-toggle').show();
		$(this).hide();
	});
});

// Thumbnail hover and click raw images
$(function() {
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