// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53004741-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
	// Eastereggs
	$('.easteregg').click(function() {
		alert('Herzlichen Glückwunsch, du hast ein Osterei gefunden!');
	});
	
	// Image toggle
	$('.image-toggle').hide();
	$('.image-toggle-button').click(function() {
		$(this).next('.image-toggle').show();
		$(this).hide();
		
	});
	$('.easteregg').click(function() {
		alert('Herzlichen Glückwunsch, du hast ein Osterei gefunden!');
	});
});